<template>
    <nav class="min-h-16 safe-bottom-pd box-content">
      <div class="flex min-h-16 pt-2 pb-2 px-6 gap-4  w-full text-center border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800  text-gray-600 dark:text-white fixed bottom-0 drop-shadow-lg">
        <NuxtLink to="/" class="w-1/4 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="w-1/4 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs">About</div>
        </NuxtLink>
        <!-- <div class="w-1/4 h-11 flex flex-colmin- justify-start pt-1 items-center gap-1 safe-bottom-pd">
          <Darkmode />
        </div> -->
        <NuxtLink to="/list" class="w-1/4 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs">List</div>
        </NuxtLink>
        <NuxtLink to="/404" class="w-1/4 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'user']" /></i><div class="text-xs"> My</div>
        </NuxtLink>
      </div> 
     
    </nav>
</template>
<style scoped>
.dark .active-link{@apply text-green-400;}
.active-link{@apply text-green-600;}
</style>