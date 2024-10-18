<template>
    <header class="flex flex-col justify-center min-h-14  safe-top-pd box-content drop-shadow-sm">
      
      <div class="flex items-center safe-top-pd px-5 min-h-14 border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0">
        
        <div class="flex items-center justify-between w-full min-h-14">
          <NuxtLink to="/" class="text-center py-1 -ml-2 inline-flex items-center">
            <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
            <span class="text-gray-600 dark:text-white font-bold text-2xl">Nuxt</span>
          </NuxtLink>
          <Darkmode />
          <!-- <button class="w-8 h-8">
            <i class="min-w-8 text-white text-xl"><font-awesome :icon="['far', 'user']" /></i>
          </button> -->
        </div>
      </div>
    </header>
</template>