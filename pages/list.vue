<script setup>
useSeoMeta({ title: 'LIST | 넉스트:Nuxt' })
const config = useRuntimeConfig();
const SUPABASE_URL = config.public.SUPABASE_URL;
const supabase = useSupabaseClient()

const { data: products } = await useAsyncData('products', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('updated_at', { ascending: false })
  
  if (error) {
    console.error('Supabase 오류:', error)
    return []
  }
  
  return data || []
})

// 개발 모드에서만 콘솔 로그 출력
if (process.env.NODE_ENV === 'development') {
  console.log('제품 데이터:', ( products.value[0] ))
}

</script>

<template>
  <main class="container flex-1">
    
    <div class="mb-3 flex justify-between items-center">
      <div class=""><i class="mr-2"><font-awesome :icon="['fas', 'bars']" /></i> <span class="text-sm">Total : {{products.length}}</span> </div>
      <div class=""></div>
    </div>
    
    <div v-if="!products"><Loading :opts="{class:'full'}" /></div>
    <ul v-else class="grid grid-cols-3 gap-4">
      <li v-for="item in products" :key="item.id" class="relative">
        <div class="relative pb-[100%] block overflow-hidden rounded-md border dark:border-transparent">
          <NuxtImg :src="SUPABASE_URL+item.images_url[0]" format="webp" :alt="item.title" class="h-full w-full object-cover absolute left-0 top-0" />
        </div>
        <h1 class="text-sm mt-3 leading-tight line-clamp-2"> {{ item.title }}</h1> 
        <p class="text-sm line-clamp-2 mt-1 font-['Spoqa_Han_Sans_Neo']">{{ $ui.commas.add(item.price) }} <i class="text-2xs">원</i></p>
      </li>
    </ul>

  </main>
</template>