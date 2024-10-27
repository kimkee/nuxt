<script setup>
const config = useRuntimeConfig();
const SUPABASE_URL = config.public.SUPABASE_URL;
const supabase = useSupabaseClient()

const { data: products } = await useAsyncData('products', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: false })
  
  if (error) {
    console.error('Supabase 오류:', error)
    return []
  }
  
  return data || []
})

// 개발 모드에서만 콘솔 로그 출력
if (process.env.NODE_ENV === 'development') {
  console.log('제품 데이터:', products.value)
}

</script>

<template>
  <main class="container flex-1">
    
    <div class="mb-3 flex justify-between items-center">
      <div class=""><i class="mr-2"><font-awesome :icon="['fas', 'bars']" /></i> <span class="text-sm">Total : {{products.length}}</span> </div>
      <div class="">
        <button @click="()=>{
          products.unshift({
              'title': '무선 라우터',
              'description': 'Netgear Nighthawk AX12 Wi-Fi 6',
              'price': 350000,
              'category': '네트워크 장비',
              'condition': '중고',
              'location': '울산',
              'images': '[Image of Netgear Nighthawk AX12]',
              'created_at': '2023-09-09T00:00:00+00:00',
              'updated_at': '2023-09-10T00:00:00+00:00',
              'status': '판매중',
              'images_url': [
                  '/storage/v1/object/public/products/goods_2.jpg',
                  '/storage/v1/object/public/products/goods_6.jpg'
              ],
              'user_id': null,
              'id': 43,
              'location_id': '8',
              'condition_id': '2',
              'category_id': '1',
              'status_id': '1'
          })
        }"
        class="btn btn-sm">추가</button>
      </div>
    </div>
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="item in products" :key="item.id" class="border border-gray-300 dark:border-gray-700 p-3 relative">
        <div class="relative pb-[100%] block overflow-hidden">
          <img :src="SUPABASE_URL+item.images_url[0]" :alt="item.title" class="h-full w-full object-cover absolute left-0 top-0">
        </div>
        <span class="absolute right-2 bottom-2 text-xs">{{ item.id }}</span>
        <h1 class="mt-3 line-clamp-1"> {{ item.title }}</h1> 
        <p class="text-xs line-clamp-2 mt-1">{{ item.description }}</p>
      </li>
    </ul>
    <h1 class="font-['Roboto']        font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Roboto']        font-extrabold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-bold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-medium ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-normal ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-light ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-extralight ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Noto_Sans_KR']  font-extrabold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-bold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-medium ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-light ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-extralight ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extrabold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-bold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-medium ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-light ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extralight ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Roboto']        font-extrabold ">[Roboto]NuxT NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-bold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-medium ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-normal ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-light ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-extralight ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Noto_Sans_KR']  font-extrabold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-bold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-medium ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-light ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-extralight ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 mt-4"></div>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extrabold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-bold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-medium ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-light ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extralight ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    
    <p>
        <NuxtLink to="/" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          href="/docs/guide/going-further/modules"><span>홈으로</span></NuxtLink>
      </p>
  </main>
</template>