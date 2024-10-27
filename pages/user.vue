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
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col items-center gap-6">
      <div> <img :src="userInfo.user_metadata.avatar_url" alt="" class="h-20 rounded-full"> </div>
      
      <div class="text-left">
        <p>메일 : {{ userInfo.user_metadata.email }}</p>
        <p>이름 : {{ userInfo.user_metadata.name }}</p>
        <p>가입 : {{ userInfo.created_at }}</p>
      </div>
      <div class="mt-2">
        <button class="btn" @click="signOut">로그아웃</button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>