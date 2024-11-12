<script setup >
useSeoMeta({ title: 'CHAT | 넉스톤:Nuxton' })
const props = defineProps(['user']);
const user = ref(props.user || null);
const supabase = useSupabaseClient();
const router = useRouter();
const route = useRoute();
const tableId = ref(route.query.id); 


// const { data: chatusers, refresh: refreshProducts } = await useAsyncData('CHAT_ALL_USERS', async () => {
//   const { data, error } = await supabase.from('CHAT_ALL_USERS').select('*').order('created_at', { ascending: true });
//   if (error) console.log('Error fetching products:', error);
//   return data;
// });



const chatusers = ref();
const tableName = ref(tableId);
const fetchData = async () => {
  try {
    const response = await fetch(`/api/chat?table=${tableName.value}`);
    const result = await response.json();
    if (!result.error) {
      // refreshProducts()
      window.setTimeout(()=>{ }, 1000); chatusers.value = result
      scrollDownChat()
      console.log(chatusers.value);
      
    } else {
      console.error('Error fetching data:', result.error);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};



console.log(user?.value);

const scrollDownChat = ()=>{
  window.setTimeout(()=> chatView.value.scrollTop = chatView.value.scrollHeight, 100);
}

let realtimeChannel;
const setupRealtimeListener = (tableName) => {
  realtimeChannel = supabase.channel(`public:${tableName}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, () => {
      fetchData();
      // refreshProducts();
      console.log(`${tableName} 업데이트`);
      scrollDownChat();
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log(`Subscribed to ${tableName} changes`);
        scrollDownChat();
      }
    });
};




onMounted(() => {
  // fetchData()
  // Real time listener for products table
/*   realtimeChannel = supabase.channel(`public:${tableName}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, () => {
      fetchData();
      refreshProducts()
      console.log(`${tableName} 업데이트`);
      scrollDownChat()
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log(`Subscribed to ${tableName} changes`);
        scrollDownChat()
      }
    }); */
  scrollDownChat()

  if (tableId.value) {
    fetchData();
    setupRealtimeListener(tableId.value);
  }


});
// Don't forget to unsubscribe when user leaves the page
onUnmounted(() => {
  supabase.removeChannel(realtimeChannel);
});

const textArea = ref(null);
const btnSend = ref(null);
const inputMsg = ()=> { // 댓글에 자동높이 기능
  const $el = textArea.value;
  if ($el) {
    $el.style.height = '1px';
    $el.style.height = $el.scrollHeight + 'px';
  }
  
  // console.log(textArea.value.value);
  if (textArea.value.value.trim() == '') {
    btnSend.value.disabled = true
  }else{
    btnSend.value.disabled = false
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

  console.log(`입력-${textArea.value.value.trim()}-`);
  textArea.value.focus();
  if (textArea.value.value.trim() == '') {
    $ui.alert("댓글을 입력하세요", {
      ycb: () => {
        textArea.value.value = '';
        textArea.value.focus();
        inputMsg();
      }
    });
    return;
  }
  const insertData = { 
    user_id: user.value?.id,
    email: user.value?.email,
    name: user.value?.user_metadata.full_name || user.value?.user_metadata.user_name,
    message: $ui.textHtml( textArea.value.value , "incode"),
    created_at: new Date().toISOString(),
    provider: user.value?.app_metadata.provider,
    profile_picture: user.value?.user_metadata.avatar_url, 
  }
  console.table(insertData);
  
  const { data, error } = await supabase
    .from('CHAT_ALL_USERS')
    .insert([ insertData ])
    .select('*')
  if (error) {
    console.error("데이터 입력 에러 Error inserting data:", error.message);
  } else {
    console.table("데이터 입력 성공 Data inserted successfully:");
    console.table(data[0]);
  }
  fetchData()
  // refreshProducts()
  textArea.value.focus();  // 입력창 포커싱
  textArea.value.value = '';  // 입력창 비우기
  textArea.value.style.height = ""; // 입력창 높이리셋
}
const isMyChat = (chatID) => user.value?.id === chatID ;

onMounted(()=>{
  inputMsg();
})
</script>
<template>

  <main class="container flex-1 flex flex-col h-full relative !p-0">
    <div class="flex flex-col justify-end absolute left-0 top-0 right-0 bottom-0">

      <div ref="chatView" class="chat-view w-full p-4 pb-7 pr-4 overflow-y-auto overflow-x-hidden"
        @scroll="$event.target.classList.add('ing-scroll')"
        @scrollend="$event.target.classList.remove('ing-scroll')"
      >
        <div v-if="!chatusers"><Loading :opts="{class:'full'}" /></div>
        <article v-else
          v-for="(chat, index) in chatusers" 
          :key="chat.id" 
          class="chmsg flex relative w-full"
          :class="{
            'me': isMyChat(chat.user_id),
            'op': !isMyChat(chat.user_id),
            'same': index > 0 && chat.user_id === chatusers[index - 1].user_id
          }"
          :uid="`${chat.user_id}`"
        >
          <div class="name text-xt absolute -top-5 text-slate-500 dark:text-slate-400">
            {{chat.name}}
          </div>
          <a href="javascript:;" class="usr block w-8 h-8 absolute  top-0">
            <img :src="`${chat.profile_picture || '/icon_app.png'}`" class="img block h-full bg-slate-500 rounded-full">
            <i class="w-4 h-4 rounded-full text-9 absolute -bottom-1 -right-1 flex items-center justify-center bg-slate-600/50 text-white dark:bg-slate-200/70 dark:text-gray-800">
              <IconProvider :provider="{ name: chat.provider, cate:'fab', class:``}" />
            </i>
          </a>
          <div class="msg text-sm relative drop-shadow-sm">
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

      <!-- 메시지 입력 UI -->
      <div class="floatbots">
        <div class="inr -mt-[1px] border-t border-gray-200 dark:border-gray-700 bg-white/100 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-white ">
          <div class="ut-rpwrite relative pl-14 pr-14 h-full pb-[15px] pt-[11px]">
            <NuxtLink :to="`${user?.email ? '/user' : ''}`" class="usr rounded-full block w-8 h-8 absolute left-4 bottom-[18px]">
              <img 
                :alt="user?.email"
                class="img w-8 h-8 bg-gray-300/40 dark:bg-gray-300/30 rounded-full"
                :src="user?.user_metadata?.avatar_url || '/img/user.png'"
                @error="handleError"
              >
              <i v-if="user?.email" class="w-4 h-4 rounded-full text-9 absolute -bottom-1 -right-1 flex items-center justify-center bg-slate-600/50 text-white dark:bg-slate-200/70 dark:text-gray-800">
                <IconProvider :provider="{ name: user?.app_metadata.provider, cate:'fab', class:``}" />
              </i>
            </NuxtLink>
            <div class="form p-[6px] px-3 pr-1 rounded-md border dark:border-gray-700 shadow-[inset_1px_1px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_1px_1px_2px_0px_rgba(0,0,0,0.3)] dark:bg-gray-900">
              <textarea
                :placeholder="`메시지를 입력해주세요`"
                class="w-full h-5 max-h-20 text-sm inline-flex align-middle outline-none bg-transparent resize-none"
                ref="textArea"
                @input="inputMsg"
                @focus="comFocus"
              ></textarea>
            </div>
            <div class="bts absolute right-4 bottom-[18px]">
              <button 
                ref="btnSend"
                class="h-8 w-8 rounded-full bg-primary disabled:opacity-50 text-white"
                :disabled="true" @click="chatWrite"
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
.floatbots{}
.floatbots>.inr{min-height: calc(4rem + var(--safe-bottom)); padding-bottom: var(--safe-bottom);}
.ut-rpwrite { min-height: 4rem; }
/* 챗팅 */
.chat-view{}
.chat-view .chmsg{@apply mt-10;}
.chat-view .chmsg+.chmsg{}
.chat-view .chmsg .name{}
.chat-view .chmsg .msg{ @apply bg-slate-200/50 dark:bg-slate-700 rounded-2xl;}
.chat-view .chmsg .msg{ max-width: calc(100% - 3rem) }

/* 상대편 메시지 */
.chat-view .chmsg.op{@apply pl-11; }
.chat-view .chmsg.op + .chmsg.op.same .usr{}
.chat-view .chmsg.op + .chmsg.op{}
.chat-view .chmsg.op + .chmsg.op .msg{}
.chat-view .chmsg.op .usr{@apply left-0}
.chat-view .chmsg.op .name{@apply left-10}
.chat-view .chmsg.op .msg{@apply rounded-tl-none}
.chat-view .chmsg.op .tm{@apply left-full}
.chat-view .chmsg.me{@apply pr-0 mt-6 justify-end; }
.chat-view .chmsg.me .tm{@apply right-full}
.chat-view .chmsg.me .msg{ @apply bg-green-200 dark:bg-primary/90  rounded-tr-none;  }
.chat-view .chmsg.me .msg .txt{@apply dark:drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] }
.chat-view .chmsg.me .usr{@apply right-0 hidden}
.chat-view .chmsg.me .name{@apply right-10 hidden}

.chat-view .chmsg.same{ @apply mt-1;}
.chat-view .chmsg.same .usr { @apply hidden;}
.chat-view .chmsg.same .name { @apply hidden;}
.chat-view .chmsg.same .msg { @apply rounded-2xl;}

.chat-view::-webkit-scrollbar-thumb{background-color: transparent; transition:background-color 1.4s ;}
.chat-view.ing-scroll::-webkit-scrollbar-thumb{background-color: #00000044; transition:background-color 1.4s ;}
.dark .chat-view.ing-scroll::-webkit-scrollbar-thumb{background-color: #ffffff22; transition:background-color 1.4s ;}
</style>
