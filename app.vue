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
    
    <header class="flex flex-col justify-center min-h-14 bg-gray-800">
      
      <div class="flex items-center py-1 px-6 min-h-14 border-b bg-gray-800 border-slate-950 fixed top-0 left-0 right-0">
        
        <div class="flex items-center justify-between w-full">
          <a href="javascript:;" class="text-center py-1 -ml-2 inline-flex items-center">
            <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
            <span class="text-white font-bold text-2xl">Nuxt</span>
          </a>
          <button class="w-8 h-8">
            <i class="min-w-8 text-white text-2xl"><font-awesome :icon="['fas', 'bars']" /></i>
          </button>
        </div>
      </div>
    </header>
    <div class="flex flex-col  items-center justify-center py-6">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-10 w-full text-center text-white text-2xl mt-3">
        <i class="min-w-8"><font-awesome :icon="['fas', 'house']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'box']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'magnifying-glass']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'bars']" /></i>
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
   

    <div class="" v-if="false">
      <NuxtWelcome />
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
