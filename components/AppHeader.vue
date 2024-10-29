<template>
  <header class="flex flex-col justify-center min-h-14 safe-top-pd box-content">
    <div class="
      flex items-center justify-between safe-top-pd px-5 min-h-14 box-content 
      bg-gradient-to-t from-white/80 to-white 
      dark:bg-gradient-to-t dark:from-gray-800/80 dark:to-[#1f2937] 
      backdrop-blur-sm fixed top-0 left-0 right-0 z-50
      after:h-[1px] after:absolute after:left-0 after:bottom-0 after:bg-gray-600/5
      after:w-full
      "
      
    >
      <NuxtLink to="/" class="text-center py-1 -ml-2 inline-flex items-center">
        <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
        <span class="text-gray-600 dark:text-white font-bold text-2xl">Nuxton</span>
      </NuxtLink>
      <Darkmode />
    </div>
  </header>
</template>