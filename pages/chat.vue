<script setup >
// import { onMounted, onUnmounted } from 'vue';
// import type { RealtimeChannel } from '@supabase/supabase-js';
 

const supabase = useSupabaseClient();
let realtimeChannel;

// Fetch products and get the refresh method provided by useAsyncData
const { data: products, refresh: refreshProducts } = await useAsyncData('products', async () => {
  const { data, error } = await supabase.from('products').select('*').order('id', { ascending: false });
  if (error) console.log('Error fetching products:', error);
  return data;
});

// Once page is mounted, listen to changes on the `products` table and refresh products when receiving event
onMounted(() => {
  // Real time listener for products table
  realtimeChannel = supabase.channel('public:products')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
      refreshProducts();
      console.log("fdssdffsd");
      
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('Subscribed to products changes');
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
    <div v-if="products">
      <h1>Products</h1>
      <ul>
        <li v-for="product,idx in products" :key="idx">{{ product.id }} : {{ product.title }}</li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
