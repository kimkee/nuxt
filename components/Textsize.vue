<template>
  <button type="button"
    class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 inline-flex justify-center items-center drop-shadow-sm"
    @click="toggleTextSize"
  >
    <span 
      class="w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-yellow-400 inline-flex justify-center items-center overflow-hidden relative"
      :class="`text-sm font-bold`"
    >
      <i><font-awesome :icon="['fas', 'font']" /></i>
    </span>
  </button>
</template>

<script setup>
const nowSize = ref()
const size = ref([13,16,20,16]);
const setTextSize = (val)=>{
  console.log(`${val} = font-size: ${size.value[val] + 'px'}`);
  document.documentElement.style.fontSize = size.value[val]+'px'
  localStorage.setItem('textsize', val);
}
const toggleTextSize = () => {
  nowSize.value >= size.value.length-1 ? nowSize.value = 0  : nowSize.value ++ ;
  setTextSize(nowSize.value);
};
onMounted(()=>{
  nowSize.value = JSON.parse(localStorage.getItem('textsize') || 1);
  setTextSize(nowSize.value)
})
</script>

<style>

</style>