<template>
  <button 
    class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 inline-flex justify-center items-center drop-shadow-sm" 
    @click="toggleDarkMode"
  >
    <span class="w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-yellow-400 inline-flex justify-center items-center text-sm">
      <i class="leading-3">
        <font-awesome v-if="isDarkMode" :icon="['fas', 'moon']" />
        <font-awesome  v-else :icon="['fas', 'sun']" />
      </i>  
    </span>

  </button>
</template>

<script setup>
// const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
// const locDark  = JSON.parse(localStorage.getItem('darkmode'));

// const initDark = ()=> locDark === null ? setDark( darkMode.matches ) : setDark( locDark ) ;
const togDark  = ()=> setDark( !htmlCls.contains('dark') );
const setDark  = (isDark)=> {
    chkTogs.forEach( tog => tog.checked = isDark );
    htmlCls.toggle('dark', isDark);
    localStorage.setItem('darkmode',isDark);
}
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkmode',true);
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode',false);
  }
}
// document.addEventListener('DOMContentLoaded', initDark);
// darkMode.addEventListener('change', initDark);
onMounted(()=>{
  const locDark  = JSON.parse(localStorage.getItem('darkmode'));
  console.log(locDark);
  isDarkMode.value = locDark
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkmode',true);
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode',false);
  }
})
</script>

<style>
/* 여기에 추가적인 스타일링을 추가할 수 있어 */
</style>