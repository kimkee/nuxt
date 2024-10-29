<script setup >
const supabase = useSupabaseClient();
let realtimeChannel;

const { data: chatusers, refresh: refreshProducts } = await useAsyncData('CHAT_ALL_USERS', async () => {
  const { data, error } = await supabase.from('CHAT_ALL_USERS').select('*').order('id', { ascending: false });
  if (error) console.log('Error fetching products:', error);
  return data;
});

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
</script>

<template>
  <main class="container flex-1 flex items-end !px-4 !py-6">
    
    <div class="chat-view w-full">
      <article  v-for="chat in chatusers" :key="chat.id" class="chmsg op flex relative w-full">
        <div class="name text-xt absolute left-10 -top-4">{{chat.name}}</div>
        <a href="javascript:;" class="usr block w-8 h-8 absolute left-0 top-0"><img src="https://cdn-icons-png.flaticon.com/128/1154/1154473.png" class="img dsfsd"></a>
        <div class="msg  text-sm relative rounded-xl">
          <div class="txt text-sm p-3 max-w-100vh break-all">{{chat.message}}</div>
          <time class="tm absolute left-full bottom-0 whitespace-nowrap mx-1 mt-1">
            <i class="fa-regular fa-calendar-days"></i> <i class="text-xt">10개월 전</i>
          </time>
        </div>
      </article>
      <article  class="chmsg me flex justify-end relative w-full">
        <div class="name text-xt absolute right-10 -top-4 hidden">aaaaaaa</div>
        <a href="javascript:;" class="usr block w-8 h-8 absolute right-0 top-0"><img src="https://cdn-icons-png.flaticon.com/128/1154/1154473.png" class="img dsfsd"></a>
        <div class="msg  text-sm relative rounded-xl">
          <div class="txt text-sm p-3 max-w-100vh break-all">동해 물과 백두산이 마르고 닳도록</div>
          <time class="tm absolute right-full bottom-0 whitespace-nowrap mx-1 mt-1">
            <i class="fa-regular fa-calendar-days"></i> <i class="text-xt">10개월 전</i>
          </time>
        </div>
      </article>
    </div>
    <!-- <p class="text-xt">text-xt - 11</p>
    <p class="text-xs">text-xs - 12</p>
    <p class="text-ss">text-ss - 13</p>
    <p class="text-sm">text-sm - 14</p>
    <p class="text-md">text-md - 15</p>
    <p class="text-base">text-base - 16</p>
    <p class="text-lg">text-lg - 18</p>
    <p class="text-xl">text-xl - 20</p>
    <p class="text-xx">text-xx - 22</p>
    <p class="text-2xl">text-2xl - 24</p> -->
    <!-- <div class="grid gap-1">
      <li v-for="chat in chatusers" :key="chat.id" class="border p-2">
        <p>{{ chat.name }}</p>
        <p>{{ chat.message }}</p>
      </li>
    </div> -->
    
  </main>
</template>

<style scoped>

/* 챗팅 */
.chat-view{}
.chat-view .chmsg{@apply mt-8;}
.chat-view .chmsg+.chmsg{}
.chat-view .chmsg .name{}
.chat-view .chmsg .msg{
  @apply bg-slate-100 dark:bg-slate-700;
  max-width: calc(100vw - 11rem); 
}

/* 상대편 메시지 */
.chat-view .chmsg.op{@apply pl-10; }
.chat-view .chmsg.op + .chmsg.op.same .usr{}
.chat-view .chmsg.op + .chmsg.op{}
.chat-view .chmsg.op + .chmsg.op.same{ @apply mt-3;}
.chat-view .chmsg.op + .chmsg.op .msg{}
.chat-view .chmsg.op .usr{}
.chat-view .chmsg.op .msg{@apply rounded-tl-none}
.chat-view .chmsg.op .tm{}
.chat-view .chmsg.me{@apply pr-10 mt-4; }
.chat-view .chmsg.me .msg{ @apply bg-green-200 dark:bg-[#41b883]  rounded-tr-none;  }
</style>
