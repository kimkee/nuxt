<script setup>
import { useRouter } from 'vue-router';
const supabase = useSupabaseClient()
const router = useRouter();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  router.push('/about');
}
</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-4xl">Profile</h1>
      <div class="mt-2">
        <button class="btn" @click="signOut">로그아웃</button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>