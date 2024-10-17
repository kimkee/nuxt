<script setup>
useSeoMeta({
  title: '넉스토어:Nuxtore',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


</script>
<template>
  <div class="kimkee">
    
     
    <div class="flex flex-col  items-center justify-center py-6">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-4 w-full text-center text-white text-2xl mt-3 px-4">
        <NuxtLink to="/about"><i class="min-w-8"><font-awesome :icon="['fas', 'house']" /></i>About</NuxtLink>
        <NuxtLink to="/list"><i class="min-w-8"><font-awesome :icon="['fas', 'box']" /></i>List</NuxtLink>
        <NuxtLink to="/404"><i class="min-w-8"><font-awesome :icon="['fas', 'magnifying-glass']" /></i> 404</NuxtLink>
        <NuxtLink to="/kkk"><i class="min-w-8"><font-awesome :icon="['fas', 'bars']" /></i>kkk</NuxtLink>
        <i class="min-w-8"><font-awesome :icon="['far', 'user']" /></i>
      </div>
      <h1 class="font-['Roboto']        font-extrabold text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Roboto']        font-bold text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Roboto']        font-medium text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Roboto']        font-normal text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Roboto']        font-light text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Roboto']        font-extralight text-xl text-white mt-6">NuxT - 넉스트 [Roboto]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-extrabold text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-bold text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-medium text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-normal text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-light text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <h1 class="font-['Noto_Sans_KR']  font-extralight text-xl text-white mt-6">NuxT - 넉스트 [Noto_Sans_KR]</h1>
      <p class="text-lg text-gray-500 leading-10 mt-6">Get started</p>
    </div>
   
    
  </div>
</template>
 
<style lang="css" scoped>
.kimkee {
  h1 { 
    @apply text-white cursor-pointer selection:not-sr-only;
    &:hover {
      @apply text-yellow-500;
    }
  }
}
</style>
