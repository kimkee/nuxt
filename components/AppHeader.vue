<script setup>
const isBAckPath = ['/chat/room' ];

// 현재 경로를 가져옵니다
const route = useRoute();
const router = useRouter();

// 경로에 따라 헤더와 네비게이션 바를 보여줄지 여부를 계산합니다

const isBtnBack = computed(() => isBAckPath.includes(route.path));

</script>
<template>
  <header class="flex flex-col justify-center min-h-14 safe-top-pd box-content">
    <div class="
      flex items-center justify-between safe-top-pd px-5 min-h-14 box-content 
      bg-gradient-to-t from-white/80 to-white 
      dark:bg-gradient-to-t dark:from-gray-800/80 dark:to-[#1f2937] 
      backdrop-blur-sm fixed top-0 left-0 right-0 z-50
      after:h-[1px] after:absolute after:left-0 after:bottom-0 after:bg-gray-900/5
      after:w-full
      "
    >
      <div class="pl-2">
        <NuxtLink  v-if="!isBtnBack" to="/" class="text-center py-1 -ml-2 inline-flex items-center">
          <img class="w-8 mr-1" src="~/assets/img/logo.svg" alt="dd">
          <span class="text-gray-600 dark:text-white font-bold text-2xl">Nuxton</span>
        </NuxtLink>
        <button v-if="isBtnBack" @click="router.back(-1)" class="h-8 w-8 text-center py-1 -ml-2 inline-flex items-center justify-center text-2xl">
          <i><font-awesome :icon="['fas', 'arrow-left']" /></i>
        </button>
      </div>
      <div>
        <Darkmode />
      </div>
    </div>
  </header>
</template>