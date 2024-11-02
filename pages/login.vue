<script setup>
useSeoMeta({ title: '로그인 | 넉스트:Nuxt' })
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;
const supabase = useSupabaseClient()

const signInWithOAuth = async (txt) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: txt,
    options: {
      redirectTo: `${SITE_URL}/callback` // 콜백 URL을 명확하게 지정
    },
  })
  if (error) console.log(error)
}

const signInWithKakao = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      scope: 'profile_nickname account_email profile_image', // 동의 항목 설정
      redirectTo: `${SITE_URL}/callback` // 콜백 URL을 명확하게 지정
    },
  });
  if (error) console.log(error);
};

const signUpNewUser = async ()=> {
  $ui.alert('준비중 입니다!')
  // const { data, error } = await supabase.auth.signUp({
  //   email: 'kimkeenet@daum.net',
  //   password: '123456',
  //   options: {
  //     emailRedirectTo: '',
  //   },
  // })
}

</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col max-w-[16rem] w-full justify-center items-center py-6 -mt-12">
      <div class="mb-1">
        <img class="w-16" src="~/assets/img/logo.svg" alt="dd" />
      </div>
      <div class="my-4 text-center mb-7 relative before:absolute before:left-0 before:right-0 before:border-t before:border-gray-500/40 before:top-1/2 before:z-0 w-full">
        <em class="text-green-600 dark:text-green-400 relative px-2 z-1 bg-white dark:bg-[#0d111b]">로그인</em>
      </div>
      <p class="text-xs mb-4">{{ SITE_URL  }}</p>
      <div class="grid grid-cols-2 gap-4 w-full">
        <button class="btn btn-lg" @click="signInWithOAuth('google')">
          <i><font-awesome :icon="['fab', 'google']" /></i>
          <em>Google</em>
        </button>
        <button class="btn btn-lg" @click="signInWithKakao()">
          <i><font-awesome :icon="['fas', 'comment']" /></i>
          <em>Kakao</em>
        </button>
        <button class="btn btn-lg" @click="signInWithOAuth('github')">
          <i><font-awesome :icon="['fab', 'github']" /></i>
          <em>Github</em>
        </button>
        <button class="btn btn-lg" @click="signUpNewUser()">
          <i><font-awesome :icon="['fas', 'envelope']" /></i>
          <em>Email</em>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
