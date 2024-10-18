<template>
  <button 
    class="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600 inline-flex justify-center items-center drop-shadow-sm" 
    @click="toggleDarkMode"
  >
    <span class="w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-yellow-400 inline-flex justify-center items-center text-sm">
      <i>
        <font-awesome v-if="isDarkMode" :icon="['fas', 'moon']" />
        <font-awesome  v-else :icon="['fas', 'sun']" />
      </i>  
    </span>

  </button>
</template>

<script setup>

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style>
/* 여기에 추가적인 스타일링을 추가할 수 있어 */
</style>