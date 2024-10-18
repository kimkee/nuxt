<template>
  <button 
    class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 inline-flex justify-center items-center drop-shadow-sm" 
    @click="toggleDarkMode"
  >
    <span class="w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-yellow-400 inline-flex justify-center items-center text-sm overflow-hidden relative">
      <i class="sun-moon leading-3 absolute left-1.55 -top-[21px] dark:top-1 flex flex-col gap-3 transition-all  duration-300">
        <font-awesome :icon="['fas', 'moon']" />
        <font-awesome :icon="['fas', 'sun']" />
      </i>  
    </span>

  </button>
</template>

<script setup>
// const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
// const locDark  = JSON.parse(localStorage.getItem('darkmode'));

// const initDark = ()=> locDark === null ? setDark( darkMode.matches ) : setDark( locDark ) ;
const changeThemeColor = (color)=> {
  const themeMeta = document.querySelector('meta[name="theme-color"]')
  if (themeMeta) {
    themeMeta.setAttribute('content', color)
  } else {
    const newThemeMeta = document.createElement('meta')
    newThemeMeta.setAttribute('name', 'theme-color')
    newThemeMeta.setAttribute('content', color)
    document.head.appendChild(newThemeMeta)
  }
}
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

    changeThemeColor('#1f2937')



  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode',false);
    changeThemeColor('#ffffff')
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
    changeThemeColor('#1f2937')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode',false);
    changeThemeColor('#ffffff')
  }
})
</script>

<style>

</style>