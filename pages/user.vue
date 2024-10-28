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


</script>
<template>
  <main class="container flex-1 items-start justify-start flex flex-col">
    <div class="flex flex-col gap-6 py-6">
      <div><img :src="userInfo.user_metadata.avatar_url" alt="" class="h-20 rounded-full"></div>
      <div class="grid gap-2 dark:text-gray-300">
        <p>메일 : {{ userInfo.user_metadata.email }} - {{ userInfo.app_metadata.provider }}</p>
        <p>이름 : {{ userInfo.user_metadata.name }}</p>
        <p>가입 : {{ userInfo.created_at }}</p>
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