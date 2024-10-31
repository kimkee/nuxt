<script setup >
const props = defineProps(['user']);
const user = ref(props.user || null);
const supabase = useSupabaseClient();
const router = useRouter();

let realtimeChannel;

const { data: chatusers, refresh: refreshProducts } = await useAsyncData('CHAT_ALL_USERS', async () => {
  const { data, error } = await supabase.from('CHAT_ALL_USERS').select('*').order('created_at', { ascending: true });
  if (error) console.log('Error fetching products:', error);
  return data;
});
console.log(user);
const scrollDownChat = ()=>{
  window.setTimeout(()=> chatView.value.scrollTop = chatView.value.scrollHeight, 100);
}
onMounted(() => {
  // Real time listener for products table
  realtimeChannel = supabase.channel('public:CHAT_ALL_USERS')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'CHAT_ALL_USERS' }, () => {
      refreshProducts();
      console.log("CHAT_ALL_USERS 업데이트");
      scrollDownChat()
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('Subscribed to CHAT_ALL_USERS changes');
        scrollDownChat()
      }
    });
  
});
// Don't forget to unsubscribe when user leaves the page
onUnmounted(() => {
  supabase.removeChannel(realtimeChannel);
});

const msgbox = ref(null);
const autoHeight = ()=> { // 댓글에 자동높이 기능
  const $el = msgbox.value;
  if ($el) {
    $el.style.height = '1px';
    $el.style.height = $el.scrollHeight + 'px';
  }
}

const comFocus = ()=> { 
  if (user.value?.email) { return; }
  $ui.confirm("채팅은 로그인이 필요합니다.<br>로그인페이지로 이동하시겠습니까?", {
    ycb: () => { router.push('/login'); return; },
    ccb: () => { return; },
    ybt: "예",
    nbt: "아니오",
  });
}

const chatView = ref(null);
const chatWrite = async ()=>{

  console.log(`입력-${msgbox.value.value.trim()}-`);
  console.table(
      { 
        user_id: user.value?.id,
        email: user.value?.email,
        name: user.value?.user_metadata.full_name || user.value?.user_metadata.user_name,
        message: $ui.textHtml( msgbox.value.value , "incode"),
        created_at: new Date().toISOString(),
        provider: user.value?.app_metadata.provider,
        profile_picture: user.value?.user_metadata.avatar_url, 
      }
  );
  
  if (msgbox.value.value.trim() == '') {
    $ui.alert("댓글을 입력하세요", {
      ycb: () => {
        msgbox.value.value = '';
        msgbox.value.focus();
      }
    });
    return;
  }
  const { data, error } = await supabase
    .from('CHAT_ALL_USERS')
    .insert([
      { 
        user_id: user.value?.id,
        email: user.value?.email,
        name: user.value?.user_metadata.full_name,
        message: $ui.textHtml( msgbox.value.value , "incode"),
        created_at: new Date().toISOString(),
        provider: user.value?.app_metadata.provider,
        profile_picture: user.value?.user_metadata.avatar_url, 
      },
    ])
    .select('*')
  if (error) {
    console.error("데이터 입력 에러 Error inserting data:", error.message);
  } else {
    console.log("데이터 입력 성공 Data inserted successfully:", data);
  }
  
  msgbox.value.focus();  // 입력창 포커싱
  msgbox.value.value = '';  // 입력창 비우기
  msgbox.value.style.height = "";
  // await nextTick(() => {
  //   window.setTimeout(()=>{
  //     chatView.value.scrollTop = chatView.value.scrollHeight;  //  스크롤창 맨 하단으로 
  //   },500)  ;
  // });
}
const isMyChat = (chatID) => user.value?.id === chatID ;

</script>
<template>

  <main class="container flex-1 flex flex-col h-full relative !p-0">
    <div class="flex flex-col justify-end absolute left-0 top-0 right-0 bottom-0">
      <div 
        class="chat-view w-full flex-col justify-end p-4 pb-7 overflow-y-auto overflow-x-hidden" 
        ref="chatView"
      >
        
        <article 
          v-for="chat in chatusers" :key="chat.id" :uid="`${chat.user_id}`" 
          :class="`chmsg ${ isMyChat(chat.user_id) ? 'me' : 'op'} flex relative w-full`"
        >
          <div class="name text-xt absolute -top-5 text-slate-500 dark:text-slate-400">
            {{chat.name}}
          </div>
          <a href="javascript:;" class="usr block w-8 h-8 absolute  top-0">
            <img :src="`${chat.profile_picture || '/icon_app.png'}`" class="img block h-full bg-slate-500 rounded-full">
            <i class="text-xt absolute -bottom-1 -right-1">
              <IconProvider :provider="{ name: chat.provider, cate:'fab', class:`${
                chat.provider =='kakao' ? 'text-yellow-300' : 'text-gray-500 dark:text-white/80'
            } ${
                chat.provider =='google' ? 'text-10' : 'text-xt'
             }`}" />
            </i>
          </a>
          <div class="msg  text-sm relative rounded-3xl drop-shadow-sm">
            <div 
              class="txt text-sm p-3 px-4 max-w-100vh break-all" 
              v-html="$ui.textHtml(chat.message,'incode')"
            ></div>
            <time class="tm absolute bottom-0 whitespace-nowrap mx-1 mt-1 space-x-1">
              <i class="text-10 text-slate-500 dark:text-slate-400">
                {{$ui.timeForm(chat.created_at,true)}}
              </i>
            </time>
          </div>
        </article>
        
      </div>


      <div class="box-content">
        <div class="min-h-16 -mt-[1px] box-content safe-bottom-pd border-t border-gray-200 dark:border-gray-700 bg-white/100 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-white ">
          <div class="relative pl-14 pr-14 h-full pb-[11px] pt-[11px]">
            <a href="javascript:;" class="usr rounded-full overflow-hidden block w-8 h-8 absolute left-4 bottom-[14px]">
              <img 
                alt=""
                class="img bg-gray-300/40 dark:bg-gray-300/30"
                :src="user?.user_metadata?.avatar_url || '/img/user.png'"
                @error="handleError"
              >
            </a>
            <div class="form p-[6px] px-3 pr-1 rounded-md border dark:border-gray-700 shadow-[inset_1px_1px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_1px_1px_2px_0px_rgba(0,0,0,0.3)] dark:bg-gray-900">
              <textarea
                :placeholder="`${user?.email ? '메시지를 입력해주세요' : '로그인이 필요합니다'}`"
                class="w-full h-5 max-h-20 text-sm inline-flex align-middle outline-none bg-transparent resize-none"
                ref="msgbox"
                @input="autoHeight"
                @focus="comFocus"
              ></textarea>
            </div>
            <div class="bts absolute right-4 bottom-[14px]">
              <button 
                class="h-8 w-8 rounded-full bg-gray-400 dark:bg-[#41b883] disabled:opacity-50 text-white"
                :disabled="(user?.email) ? false : true" @click="chatWrite"
              >
                <i><font-awesome class="-scale-x-100" :icon="['fas', 'paper-plane']" /></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </main>
</template>

<style scoped>

/* 챗팅 */
.chat-view{}
.chat-view .chmsg{@apply mt-8;}
.chat-view .chmsg+.chmsg{}
.chat-view .chmsg .name{}
.chat-view .chmsg .msg{
  @apply bg-slate-200/50 dark:bg-slate-700;
  max-width: calc(100vw - 11rem); 
}

/* 상대편 메시지 */
.chat-view .chmsg.op{@apply pl-10; }
.chat-view .chmsg.op + .chmsg.op.same .usr{}
.chat-view .chmsg.op + .chmsg.op{}
.chat-view .chmsg.op + .chmsg.op.same{ @apply mt-3;}
.chat-view .chmsg.op + .chmsg.op .msg{}
.chat-view .chmsg.op .usr{@apply left-0}
.chat-view .chmsg.op .name{@apply left-10}
.chat-view .chmsg.op .msg{@apply rounded-tl-none}
.chat-view .chmsg.op .tm{@apply left-full}
.chat-view .chmsg.me{@apply pr-10 mt-6 justify-end; }
.chat-view .chmsg.me .tm{@apply right-full}
.chat-view .chmsg.me .msg{ @apply bg-green-200 dark:bg-[#41b883]  rounded-tr-none;  }
.chat-view .chmsg.me .usr{@apply right-0}
.chat-view .chmsg.me .name{@apply right-10 hidden}
</style>
