<template>
    <nav class="flex flex-col justify-center min-h-14 bg-white dark:bg-gray-800 safe-bottom-pd ">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-4 w-full text-center border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-white text-base pt-2 pb-2 px-6">
        <NuxtLink to="/" class="w-1/4 h-11 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs font-light">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="w-1/4 h-11 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs font-light">About</div>
        </NuxtLink>
        <NuxtLink to="/list" class="w-1/4 h-11 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs font-light">List</div>
        </NuxtLink>
        <NuxtLink to="/404" class="w-1/4 h-11 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'magnifying-glass']" /></i><div class="text-xs font-light"> 404</div>
        </NuxtLink>
      </div> 
     
    </nav>
</template>
<style scoped>
.dark .active-link{@apply text-green-400;}
.active-link{@apply text-green-600;}
</style>