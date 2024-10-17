<template>
    <nav class="flex flex-col justify-center min-h-14 bg-gray-800 safe-bottom-pd ">
      <div class="flex justify-center grid-flow-col auto-cols-fr gap-4 w-full text-center text-white text-xl pt-3 px-6">
        <NuxtLink to="/" class="w-1/4 h-14 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'house']" /></i><div class="text-xs">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="w-1/4 h-14 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'box']" /></i><div class="text-xs">About</div>
        </NuxtLink>
        <NuxtLink to="/list" class="w-1/4 h-14 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'bars']" /></i><div class="text-xs">List</div>
        </NuxtLink>
        <NuxtLink to="/404" class="w-1/4 h-14 flex flex-col justify-start">
          <i><font-awesome :icon="['fas', 'magnifying-glass']" /></i><div class="text-xs"> 404</div>
        </NuxtLink>
      </div> 
     
    </nav>
</template>
<style scoped>
.active-link{@apply text-green-400;}
</style>