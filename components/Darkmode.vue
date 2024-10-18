<template>
    <button @click="toggleDarkMode">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
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
  