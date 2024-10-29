<script setup >
const supabase = useSupabaseClient();
let realtimeChannel;

const { data: chatusers, refresh: refreshProducts } = await useAsyncData('chatusers', async () => {
  const { data, error } = await supabase.from('chatusers').select('*').order('id', { ascending: false });
  if (error) console.log('Error fetching products:', error);
  return data;
});

onMounted(() => {
  // Real time listener for products table
  realtimeChannel = supabase.channel('public:chatusers')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'chatusers' }, () => {
      refreshProducts();
      console.log("fdssdffsd");
      
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('Subscribed to chatusers changes');
      }
    });
});

// Don't forget to unsubscribe when user leaves the page
onUnmounted(() => {
  supabase.removeChannel(realtimeChannel);
});
</script>

<template>
  <main class="container flex-1">
    <div v-if="chatusers">
      <h1>Chat</h1>
      <p class="text-xt">text-xt - 11</p>
      <p class="text-xs">text-xs - 12</p>
      <p class="text-ss">text-ss - 13</p>
      <p class="text-sm">text-sm - 14</p>
      <p class="text-md">text-md - 15</p>
      <p class="text-base">text-base - 16</p>
      <p class="text-lg">text-lg - 18</p>
      <p class="text-xl">text-xl - 20</p>
      <p class="text-xx">text-xx - 22</p>
      <p class="text-2xl">text-2xl - 24</p>
      <ul class="grid gap-1">
        <li v-for="chat in chatusers" :key="chat.id" class="border p-2">
          <p>{{ chat.name }}</p>
          <p>{{ chat.message }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
