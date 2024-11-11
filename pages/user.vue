<script setup>
useSeoMeta({ title: '회원정보 | 넉스톤:Nuxton' })

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
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="w-full flex flex-col gap-6 py-6 items-center justify-center text-center">
      <div class="relative">
        <img :src="userInfo.user_metadata.avatar_url" alt="" class="w-20 h-20 rounded-full bg-gray-300">
        <i class="text-base absolute right-0 bottom-0 bg-slate-400 rounded-full w-7 h-7 text-center flex  justify-center items-center">
          <IconProvider :provider="{ name: userInfo.app_metadata.provider, cate:'fab', class:`text-white`}" 
          />
        </i>
      </div>
      <div class="flex flex-col justify-center gap-2 dark:text-gray-300">
        <p> {{ userInfo.user_metadata.email }} </p>
        <p> {{ userInfo.user_metadata.name || userInfo.user_metadata.user_name }}</p>
        <div class="inline-flex gap-1"> 
          <p class="first-letter:uppercase">{{userInfo.app_metadata.provider}}</p> - 
          <p class="first-letter:uppercase">{{ $ui.dateForm(userInfo.created_at) }}</p>
        </div>
      </div>
      <div class="mt-2">
        <button class="btn" @click="signOut">
          <me>로그아웃</me>
          <i><font-awesome :icon="['fas', 'power-off']" /></i>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>

</style>