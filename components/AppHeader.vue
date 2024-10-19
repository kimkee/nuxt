<template>
    <header class="flex flex-col justify-center min-h-14 safe-top-pd box-content">
      
      <div class="flex items-center justify-between safe-top-pd px-5 min-h-14 box-content border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0 drop-shadow-sm">
        
        
          <NuxtLink to="/" class="text-center py-1 -ml-2 inline-flex items-center">
            <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
            <span class="text-gray-600 dark:text-white font-bold text-2xl">Nuxton</span>
          </NuxtLink>
          <Darkmode />
          <!-- <button class="w-8 h-8">
            <i class="min-w-8 text-white text-xl"><font-awesome :icon="['far', 'user']" /></i>
          </button> -->
        
      </div>
    </header>
</template>