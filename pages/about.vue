<script setup>
import GithubButton from "./components/GithuButton.vue";
const copyToClipboard = () => {
  navigator.clipboard.writeText('kkkk')
    .then(() => {
      alert('클립보드에 복사되었습니다!')
    })
    .catch(err => {
      console.error('클립보드 복사 실패: ', err)
    })
}

function hexToLuminance(hex) {
  // 16진수 색상 값을 RGB로 변환
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // 명도 값 계산
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // 명도 값을 0-100 범위로 변환
  return Math.round(l * 100);
}
const luminance = hexToLuminance('#777777');
console.log(`명도 값: ${luminance}`);

const color = (hex)=>{
alert( `명도 치수는  ${hexToLuminance(hex)}  % 입니다.`)
}
</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-4xl">About</h1>
      <GithubButton />
      <p class="grid grid-flow-col gap-2">
        <button class="btn" @click="copyToClipboard">복사</button>
        <a class="btn" @click="()=>color('#FFFFFF')">#FFFFFF</a>
      </p>
      <p>
        <NuxtLink to="/" class="btn-black"
          href="/docs/guide/going-further/modules">Home</NuxtLink>
      </p>
    </div>
  </main>
</template>

<style lang="css" scoped>
.btn{
  @apply flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 inline-flex items-center;
  &-black{
    @apply  aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset  
  }
}
</style>