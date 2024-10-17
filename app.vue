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
  <div class="kimkee p-3 pt-4">
    <NuxtRouteAnnouncer />
    <header class="flex justify-start px-3 py-1 h-14">
      <a href="javascript:;" class="text-center py-1 inline-flex items-center">
        <!-- <img class="w-20 mb-1" src="//nuxt.com/assets/design-kit/logo-green-white.svg" alt="dd"> -->
        <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
        <span class="text-white font-bold text-2xl">Nuxt</span>
      </a>
    </header>
    <div class="flex flex-col  items-center justify-center py-6">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-10 w-full text-center text-white text-2xl mt-3">
        <i class="min-w-8"><font-awesome :icon="['fas', 'house']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'box']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'magnifying-glass']" /></i>
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
