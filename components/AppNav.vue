<script setup>
// const user = useSupabaseUser(); 
// const userInfo = ref(null)
// userInfo.value = user.value
// console.log(userInfo.value);


const props = defineProps(['user']);
const user = ref(props.user);
// console.log(props.user);

</script>
<template>
  <nav class="nav">
    <div class="inr border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-white fixed bottom-0 left-0 right-0">
      <div class="flex text-center pt-2 px-5">
        <NuxtLink to="/" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><font-awesome :icon="['fas', 'house']" /></i>
          <div class="text-xs">Home</div>
        </NuxtLink>
        <NuxtLink to="/about" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><font-awesome :icon="['fas', 'box']" /></i>
          <div class="text-xs">About</div>
        </NuxtLink>
        <NuxtLink to="/chat" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><font-awesome :icon="['fas', 'comments']" /></i>
          <div class="text-xs">Chat</div>
        </NuxtLink>
        <NuxtLink to="/list" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><font-awesome :icon="['fas', 'bars']" /></i>
          <div class="text-xs">List</div>
        </NuxtLink>
        <NuxtLink  v-if="user.email" to="/user" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><img :src="user?.user_metadata?.avatar_url || '/img/user.png'" alt="" class="w-6 h-6 rounded-full inline-block" /></i>
          <div class="text-xs">MY</div>        
        </NuxtLink>
        <NuxtLink  v-else to="/user" class="w-full h-12 flex flex-col justify-start gap-1">
          <i><font-awesome :icon="['fas', 'user']" /></i>
          <div class="text-xs">MY</div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav{height: calc(4rem + var(--safe-bottom));}
.nav .inr{
  height: calc(4rem + var(--safe-bottom));
  left: 50%;
  width: 100%;
  max-width: var(--mwide);
  transform: translateX(-50%);
  margin-left: calc(0rem - var(--scrPad) / 2);
}
.dark .active-link { @apply text-primary; }
.active-link { @apply text-primary; }
a:active { @apply scale-90 transition duration-300; }
</style>
