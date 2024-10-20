<template>
    <nav class="min-h-16 safe-bottom-pd box-content">
      <div class="min-h-16 safe-bottom-pd box-content  border-t border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-white fixed bottom-0 left-0 right-0">
        <div class="flex text-center pt-2 px-5">
          <NuxtLink to="/" class="w-full h-12 flex flex-col justify-start gap-1">
            <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs">Home</div>
          </NuxtLink>
          <NuxtLink to="/about" class="w-full h-12 flex flex-col justify-start gap-1">
            <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs">About</div>
          </NuxtLink>
          <NuxtLink to="/list" class="w-full h-12 flex flex-col justify-start gap-1">
            <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs">List</div>
          </NuxtLink>
          <NuxtLink to="/404" class="w-full h-12 flex flex-col justify-start gap-1">
            <i><font-awesome :icon="['fas', 'user']" /></i><div class="text-xs"> Mypage</div>
          </NuxtLink>
        </div>
      </div>
    </nav>
    <!-- 
    <nav class="min-h-16 safe-bottom-pd box-content">
      <div class="flex min-h-16 pt-1 pb-2 px-6 gap-4 w-full text-center border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-white fixed bottom-0 right-0">
        <NuxtLink to="/" class="w-1/4 pt-1 min-h-12 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="w-1/4 pt-1 min-h-12 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs">About</div>
        </NuxtLink>
        <NuxtLink to="/list" class="w-1/4 pt-1 min-h-12 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs">List</div>
        </NuxtLink>
        <NuxtLink to="/404" class="w-1/4 pt-1 min-h-12 flex flex-col justify-start gap-1 safe-bottom-pd">
          <i><font-awesome :icon="['fas', 'user']" /></i><div class="text-xs"> Mypage</div>
        </NuxtLink>
      </div>
    </nav> 
    -->
</template>
<style scoped>
.dark .active-link{@apply text-green-400;}
.active-link{@apply text-green-600;}
a:active{
  /* -webkit-tap-highlight-color: transparent; */
  @apply  scale-90 transition duration-300
}
</style>