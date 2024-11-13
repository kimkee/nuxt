<template>
  <div class="popup">
    <div class="popup-content p-6 bg-white dark:bg-slate-700 shadow-lg rounded-md">
      <slot></slot>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>
  
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  /* background: white; */
  /* padding: 20px; */
  /* border-radius: 5px; */
}
</style>
  