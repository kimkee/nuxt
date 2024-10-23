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

    <div class="flex flex-col max-w-[20rem] w-full justify-center items-center py-6 -mt-12">
      <div class="mb-1"><img class="w-16" src="~/assets/img/logo.svg" alt="dd"></div>
      <div class="my-4 text-center mb-4 relative before:absolute before:left-0 before:right-0 before:border-t before:border-gray-500/30 before:top-1/2 before:z-0 w-full">
        <em class="text-green-600 dark:text-green-400 relative px-2 z-1 bg-white dark:bg-[#0d111b]">로그인 </em>
      </div>
      <div class="grid grid-cols-2 gap-2 w-full">
        <button type="button" class="btn btn-lg"><i><font-awesome :icon="['fab', 'github']" /></i><em>Github </em></button>
        <button type="button" class="btn btn-lg"><i><font-awesome :icon="['fab', 'google']" /></i><em>Google </em></button>
        <button type="button" class="btn btn-lg"><i><font-awesome :icon="['fab', 'kickstarter-k']" /></i><em>Kakao </em></button>
        <button type="button" class="btn btn-lg"><i><font-awesome :icon="['fab', 'twitter']" /></i><em>Twitter </em></button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>