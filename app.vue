<template>
  <div class="kimkee bg-black">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col  items-center justify-center p-16">
      <h1 class="title font-semibold text-4xl text-white">Nuxton!!</h1>
      <p class="text-lg text-gray-500">Get started</p>
    </div>


    <NuxtWelcome />
    
  </div>
</template>
<style lang="css" scoped>
.kimkee {
  @apply bg-slate-900;

  h1 { 
    @apply text-yellow-500;

  }
  &:hover {
    @apply text-white
  }
}
</style>
