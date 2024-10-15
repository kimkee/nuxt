<template>
  <div class="kimkee">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col  items-center justify-center p-16">
      <div class="text-center">
        <img class="w-20 h-20" src="~/assets/img/icon.png" alt="dd">
      </div>
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-10 w-full text-center text-white text-4xl mt-3">
        <i><font-awesome :icon="['fas', 'house']" /></i>
        <i><font-awesome :icon="['fas', 'box']" /></i>
        <i><font-awesome :icon="['fas', 'magnifying-glass']" /></i>
        <i><font-awesome :icon="['far', 'user']" /></i>
      </div>
      <h1 class="title font-semibold text-4xl text-white mt-6">Nuxton!!</h1>
      <p class="text-lg text-gray-500 leading-10">Get started</p>
    </div>
   

    <NuxtWelcome />
    
  </div>
</template>
<style lang="css" scoped>
.kimkee {
  @apply bg-gray-900;
  h1 { 
    @apply text-white cursor-pointer selection:not-sr-only;
    &:hover {
      @apply text-yellow-500;
    }
  }
}
</style>
