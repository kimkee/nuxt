<script setup>


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
    
    <div v-if="products === undefined">
      <Loading :opts="{class:'full'}" />
    </div>
    <ul v-else-if="products && products.length > 0" class="grid grid-cols-3 gap-4">
      <li v-for="item in products" :key="item.id" class="relative">
        <div class="relative pb-[100%] block overflow-hidden rounded-md border dark:border-transparent">
          <NuxtImg :src="SUPABASE_URL+item.images_url[0]" format="webp" :alt="item.title" class="h-full w-full object-cover absolute left-0 top-0" />
        </div>
        <h1 class="text-sm mt-3 leading-tight line-clamp-2"> {{ item.title }}</h1> 
        <p class="text-sm line-clamp-2 mt-1 font-['Spoqa_Han_Sans_Neo']">{{ $ui.commas.add(item.price) }} <i class="text-2xs">원</i></p>
      </li>
    </ul>
    <div v-else>상품이 없습니다.</div>





    <h1 class="font-['Roboto']        font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal text-xl">NuxT - 넉스트률걁 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Roboto']        font-extrabold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-bold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-medium ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-normal ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-light ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-extralight ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Noto_Sans_KR']  font-extrabold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-bold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-medium ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-light ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-extralight ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extrabold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-bold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-medium ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-light ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extralight ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Roboto']        font-extrabold ">[Roboto]NuxT NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-bold ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-medium ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-normal ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-light ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Roboto']        font-extralight ">[Roboto] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Noto_Sans_KR']  font-extrabold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-bold ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-medium ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-normal ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-light ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Noto_Sans_KR']  font-extralight ">[Noto_Sans_KR] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extrabold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-bold ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-medium ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-normal ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-light ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <h1 class="font-['Spoqa_Han_Sans_Neo']  font-extralight ">[Spoqa_Han_Sans_Neo] NuxT - 넉스트 - 0123456</h1>
    <div class="border-t border-gray-300 my-4"></div>
    <p>
        <NuxtLink to="/" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          href="/docs/guide/going-further/modules"><span>홈으로</span></NuxtLink>
      </p>
  </main>
</template>