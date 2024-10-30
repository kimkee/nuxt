<script setup >
const props = defineProps(['user']);
const user = ref(props.user || null);
const supabase = useSupabaseClient();
let realtimeChannel;

const { data: chatusers, refresh: refreshProducts } = await useAsyncData('CHAT_ALL_USERS', async () => {
  const { data, error } = await supabase.from('CHAT_ALL_USERS').select('*').order('id', { ascending: false });
  if (error) console.log('Error fetching products:', error);
  return data;
});
console.log(user);

onMounted(() => {
  // Real time listener for products table
  realtimeChannel = supabase.channel('public:CHAT_ALL_USERS')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'CHAT_ALL_USERS' }, () => {
      refreshProducts();
      console.log("fdssdffsd");
      
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('Subscribed to CHAT_ALL_USERS changes');
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
</script>
<template>

  <main class="container flex-1 flex flex-col h-full relative !p-0">
    <div class="flex flex-col justify-end absolute left-0 top-0 right-0 bottom-0">
      <div class="chat-view w-full flex-col justify-end p-4 pb-7 overflow-y-auto overflow-x-hidden">
        
        <article  v-for="chat in chatusers" :key="chat.id" class="chmsg op flex relative w-full">
          <div class="name text-xt absolute -top-5 text-slate-500 dark:text-slate-400">
            {{chat.name}}
          </div>
          <a href="javascript:;" class="usr rounded-full overflow-hidden block w-8 h-8 absolute left-0 top-0">
            <img :src="`${chat.profile_picture || '/icon_app.png'}`" class="img block h-full bg-slate-500">
          </a>
          <div class="msg  text-sm relative rounded-3xl drop-shadow-sm">
            <div 
              class="txt text-sm p-3 px-4 max-w-100vh break-all" 
              v-html="$ui.textHtml(chat.message,'incode')"
            ></div>
            <time class="tm absolute left-full bottom-0 whitespace-nowrap mx-1 mt-1 space-x-1">
              <i class="text-10 text-slate-500 dark:text-slate-400">
                {{$ui.timeForm(chat.created_at,true)}}
              </i>
            </time>
          </div>
        </article>
        <article  class="chmsg me flex justify-end relative w-full">
          <div class="name text-xt absolute -top-5 text-slate-500 dark:text-slate-400">
            홍길동
          </div>
          <a href="javascript:;" class="usr rounded-full overflow-hidden block w-8 h-8 absolute right-0 top-0"><img src="https://cdn-icons-png.flaticon.com/128/1154/1154473.png" class="img dsfsd"></a>
          <div class="msg  text-sm relative rounded-3xl drop-shadow-sm">
            <div class="txt text-sm p-3 px-4 max-w-100vh break-all">동해 물과 백두산이 마르고 닳도록</div>
            <time class="tm absolute right-full bottom-0 whitespace-nowrap mx-1 mt-1 space-x-1">
              <i class="text-10 text-slate-500 dark:text-slate-400">방금 전</i>
            </time>
          </div>
        </article>
      </div>


      <div class="min-h-14  box-content">
        <div class="min-h-14 box-content border-t border-gray-200 dark:border-gray-700 bg-white/100 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-white ">
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
              ></textarea>
            </div>
            <div class="bts absolute right-4 bottom-[14px]">
              <button class="h-8 w-8 rounded-full bg-gray-400 dark:bg-[#41b883] text-white">
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
.chat-view .chmsg.op .usr{}
.chat-view .chmsg.op .name{@apply left-10}
.chat-view .chmsg.op .msg{@apply rounded-tl-none}
.chat-view .chmsg.op .tm{}
.chat-view .chmsg.me{@apply pr-10 mt-6; }
.chat-view .chmsg.me .msg{ @apply bg-green-200 dark:bg-[#41b883]  rounded-tr-none;  }
.chat-view .chmsg.me .name{@apply right-10 hidden}
</style>
