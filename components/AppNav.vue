<template>
    <nav class="nav min-h-16 safe-bottom-pd box-content">
      <div class="flex min-h-16  px-6 gap-0 w-full text-center border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-white fixed bottom-0 right-0">
        <NuxtLink to="/" class="bt w-full py-2 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd box-content">
          <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="bt w-full py-2 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd box-content">
          <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs">About</div>
        </NuxtLink>
        <NuxtLink to="/list" class="bt w-full py-2 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd box-content">
          <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs">List</div>
        </NuxtLink>
        <NuxtLink to="/404" class="bt w-full py-2 min-h-11 flex flex-col justify-start gap-1 safe-bottom-pd box-content">
          <i><font-awesome :icon="['fas', 'user']" /></i><div class="text-xs"> Mypage</div>
        </NuxtLink>
      </div> 
     
    </nav>
</template>
<style scoped>
.dark .active-link{@apply text-green-400;}
.active-link{@apply text-green-600;}
nav .bt:active{
  -webkit-tap-highlight-color: transparent;
  @apply  scale-90 transition duration-300
}
</style>