<script setup>
const props = defineProps(['user']);
const user = ref(props.user || null);


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
// console.log(`명도 값: ${luminance}`);

const color = (hex)=>{
  alert( `명도 수치는  ${hexToLuminance(hex)}  % 입니다.`)
}




</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col items-center gap-6 py-10">
      <h1 class="text-4xl">About</h1>
      <p>{{user?.name}}</p>
      <!-- <pre class="text-sm p-10 overflow-hidden w-[400px] ">{{JSON.stringify(user, null, 1)}}</pre> -->
      <GithubButtons />
      
      <p class="flex gap-3">
        <IconProvider :provider="{ name:'google', cate:'fab', class:'abc def'}" />
        <IconProvider :provider="{ name:'github', cate:'fab', class:'abc def'}" />
        <IconProvider :provider="{ name:'kakao', cate:'fas', class:'text-yellow-300 dark:text-white'}" />
      </p>

      <p class="grid grid-flow-col gap-2">
        <button class="btn" @click="copyToClipboard">복사</button>
        <button class="btn" @click="() => color('#FFFFFF')">#FFFFFF</button>
        <button class="btn" @click="() => {
          $ui.alert('공통 알럿창 UI 입니다.',{
              tit : '타이틀',
              ybt : '확인',
              ycb : ()=>{ console.log('알럿확인') }
            }
          );
        }">알럿</button>
        <button class="btn" 
          @click="() => {
            $ui.confirm('공통 컨펌창 UI 입니다. <br>공통 컨펌창 UI 입니다. <br>공통 컨펌창 UI 입니다.',{
              tit : '타이틀',
              ybt : '확인',
              nbt : '취소',
              ycb : ()=>{ console.log('컨펌확인') },
              ncb : ()=>{ console.log('컨펌취소') }
            })
          }"
        >컨펌</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-xs">버튼 btn-xs</button>
        <button class="btn btn-xs btn-primary">버튼 btn-xs</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-sm">버튼 btn-sm</button>
        <button class="btn btn-sm btn-primary">버튼 btn-sm</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn">버튼</button>
        <button class="btn btn-primary">버튼</button>
        <button class="btn" disabled>버튼</button>
        <button class="btn btn-primary" disabled>버튼</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-md">버튼 btn-md</button>
        <button class="btn btn-md btn-primary">버튼 btn-md</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-lg">버튼 btn-lg</button>
        <button class="btn btn-lg btn-primary">버튼 btn-lg</button>
      </p>
      <p class="grid grid-flow-col gap-4">
        <button class="btn btn-xl">버튼 btn-xl</button>
        <button class="btn btn-xl btn-primary">버튼 btn-xl</button>
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <p class="text-10">text-10 - 10</p>
        <p class="text-xt">text-xt - 11</p>
        <p class="text-xs">text-xs - 12</p>
        <p class="text-ss">text-ss - 13</p>
        <p class="text-sm">text-sm - 14</p>
        <p class="text-md">text-md - 15</p>
        <p class="text-base">text-base - 16</p>
        <p class="text-lg">text-lg - 18</p>
        <p class="text-xl">text-xl - 20</p>
        <p class="text-xx">text-xx - 22</p>
        <p class="text-2xl">text-2xl - 24</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>