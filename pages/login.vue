<script setup>
const config = useRuntimeConfig();
const TITLE = config.public.TITLE;


const supabase = useSupabaseClient()

const signInWithOAuth = async (txt) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: txt,
    // options: {
    //   redirectTo: 'http://localhost:3000/confirm',
    // },
  })
  if (error) console.log(error)
}

</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col max-w-[16rem] w-full justify-center items-center py-6 -mt-12">
      <div class="mb-1">
        <img class="w-16" src="~/assets/img/logo.svg" alt="dd" />
      </div>
      <div class="my-4 text-center mb-4 relative before:absolute before:left-0 before:right-0 before:border-t before:border-gray-500/40 before:top-1/2 before:z-0 w-full">
        <em class="text-green-600 dark:text-green-400 relative px-2 z-1 bg-white dark:bg-[#0d111b]">로그인</em>
      </div>
      {{ TITLE  }}
      <div class="grid grid-cols-2 gap-2 w-full">
        <button class="btn btn-md" @click="signInWithOAuth('github')">
          <i><font-awesome :icon="['fab', 'github']" /></i>
          <em>Github</em>
        </button>
        <button class="btn btn-md" @click="signInWithOAuth('google')">
          <i><font-awesome :icon="['fab', 'google']" /></i>
          <em>Google</em>
        </button>
        <button class="btn btn-md" disabled>
          <i><font-awesome :icon="['fab', 'kickstarter-k']" /></i>
          <em>Kakao</em>
        </button>
        <button class="btn btn-md" disabled>
          <i><font-awesome :icon="['fab', 'twitter']" /></i>
          <em>Twitter</em>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
