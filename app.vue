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
  <div class="kimkee p-2">
    <NuxtRouteAnnouncer />
    <header class="flex justify-start px-3 py-1">
      <div class="text-center py-1">
        <img class="w-20 mb-1" src="//nuxt.com/assets/design-kit/logo-green-white.svg" alt="dd">
      </div>
    </header>
    <div class="flex flex-col  items-center justify-center p-16">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-10 w-full text-center text-white text-2xl mt-3">
        <i class="min-w-8"><font-awesome :icon="['fas', 'house']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'box']" /></i>
        <i class="min-w-8"><font-awesome :icon="['fas', 'magnifying-glass']" /></i>
        <i class="min-w-8"><font-awesome :icon="['far', 'user']" /></i>
      </div>
      <h1 class="title font-semibold text-4xl text-white mt-6">Nuxton!!</h1>
      <p class="text-lg text-gray-500 leading-10">Get started</p>
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
