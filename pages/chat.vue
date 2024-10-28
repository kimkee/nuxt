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
      <ul>
        <li v-for="chat in chatusers" :key="chat.id">{{ chat.id }} : {{ chat.message }}</li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
