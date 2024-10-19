<template>
  <button type="button"
    class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 inline-flex justify-center items-center drop-shadow-sm" 
    @click="toggleDarkMode"
  >
    <span class="w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-yellow-400 inline-flex justify-center items-center text-sm overflow-hidden relative">
      <i class="sun-moon leading-3 absolute left-1.55 -top-[1.3rem] dark:top-[0.3rem] flex flex-col gap-3 transition-all ease-in duration-300">
        <font-awesome :icon="['fas', 'moon']" />
        <font-awesome :icon="['fas', 'sun']" />
      </i>  
    </span>
  </button>
</template>

<script setup>

const changeThemeColor = (color) => document.querySelector('meta[name="theme-color"]').setAttribute('content', color);

const setDarkMode = (isDark) => {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('darkmode', isDark);
  changeThemeColor(isDark ? '#1f2937' : '#ffffff');
};

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  setDarkMode(isDarkMode.value);
};

onMounted(() => {
  isDarkMode.value = JSON.parse(localStorage.getItem('darkmode') ?? window.matchMedia('(prefers-color-scheme: dark)').matches);
  setDarkMode(isDarkMode.value);
});
// const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
// const locDark  = JSON.parse(localStorage.getItem('darkmode'));
// document.addEventListener('DOMContentLoaded', initDark);
// darkMode.addEventListener('change', initDark);

</script>

<style>

</style>