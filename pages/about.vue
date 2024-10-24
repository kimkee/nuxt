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
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-4xl">About</h1>
      <GithubButton />
      <p class="grid grid-flow-col gap-2">
        <button class="btn" @click="copyToClipboard">복사</button>
        <button class="btn" @click="()=>color('#FFFFFF')">#FFFFFF</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-xs">버튼</button>
        <button class="btn btn-xs btn-primary">버튼</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn">버튼</button>
        <button class="btn btn-primary">버튼</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-lg">버튼 btn-lg</button>
        <button class="btn btn-lg btn-primary">버튼 btn-lg</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-xl">버튼 btn-xl</button>
        <button class="btn btn-xl btn-primary">버튼 btn-xl</button>
      </p>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>