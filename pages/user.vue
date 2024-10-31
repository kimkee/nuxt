<script setup>
// import { useRouter } from 'vue-router';
// import { useSupabaseClient, useSupabaseUser } from '@supabase/auth-helpers-nuxt';
const supabase = useSupabaseClient()
const router = useRouter();
const user = useSupabaseUser(); 
const userInfo = ref(null)
userInfo.value = user.value
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  window.location.replace('/');
}
console.log(userInfo);

const ico_provider = ()=>{
  let prvid = [];
  if (userInfo.value.app_metadata.provider == 'google') {
    prvid = ['fab', 'google', '']
  }
  if (userInfo.value.app_metadata.provider == 'kakao') {
    prvid = ['fas', 'comment', 'text-yellow-300']
  }
  if (userInfo.value.app_metadata.provider == 'github') {
    prvid = ['fab', 'github', '']
  }
  
  return prvid
}

</script>
<template>
  <main class="container flex-1 items-start justify-start flex flex-col">
    <div class="flex flex-col gap-6 py-6 items-start">
      <div class="relative inline-flex">
        <img :src="userInfo.user_metadata.avatar_url" alt="" class="h-20 rounded-full">
        <i class="text-base absolute right-0 bottom-0 bg-slate-400 rounded-full w-7 h-7 text-center flex  justify-center items-center">
          <IconProvider :provider="{ name: userInfo.app_metadata.provider, cate:'fab', class:`text-white`}" 
          />
        </i>
      </div>
      <div class="grid gap-2 dark:text-gray-300">
        <p class="flex items-center gap-2">
          <span>계정 :</span> {{ userInfo.user_metadata.email }}  
        </p>
        <p class="flex items-center gap-2">이름 : {{ userInfo.user_metadata.name || userInfo.user_metadata.user_name }}</p>
        <p class="flex items-center gap-2">가입 : {{userInfo.app_metadata.provider}} - {{ userInfo.created_at }} </p>
      </div>
      <div class="mt-2">
        <button class="btn" @click="signOut">
          <i><font-awesome :icon="['fas', 'right-to-bracket']" /></i>
          <me>로그아웃</me>
        </button>
      </div>
      
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>