<script setup >
useSeoMeta({ title: 'CHAT | 넉스톤:Nuxton' })
const props = defineProps(['user']);
const user = ref(props.user || null);
const supabase = useSupabaseClient();
const router = useRouter();


</script>
<template>

  <main class="container flex-1 flex flex-col h-full relative !p-0">
    <div class="flex flex-col justify-end absolute left-0 top-0 right-0 bottom-0">

      <div class="overflow-y-auto">
        <ul class="grid grid-cols-1 p-6 py-8 gap-4">
          <li class="">
            <NuxtLink :to="`./chat/room?id=CHAT_ALL_USERS`" class="border border-gray-300 shadow-sm dark:border-gray-700 bg-white/80 dark:bg-gray-800/70 p-3 pr-8 flex rounded-xl gap-4 items-center relative">
              <div class="flex flex-wrap flex-none items-start border border-gray-300 dark:border-gray-800 w-16 h-16 rounded-xl p-2">
                <img class=" w-1/2" src="/img/user.png">
                <img class=" w-1/2" src="/img/user.png">
                <img class=" w-1/2" src="/img/user.png">
                <img class=" w-1/2" src="/img/user.png">
              </div>
              <div class="text-lg leading-tight">All member chat room</div>
              <font-awesome :icon="['fas', 'chevron-right']" class="absolute right-5 text-gray-700 dark:text-gray-400" />
            </NuxtLink>
          </li>
          <li v-for="(room, index) in []" class="opacity-50">
            <NuxtLink @click="$ui.alert('준비중')" class="border border-gray-300 shadow-sm dark:border-gray-700 bg-white/80 dark:bg-gray-800/70 p-3 pr-8 flex rounded-xl gap-6 items-center relative">
              <div class="flex flex-wrap items-start border border-gray-300 dark:border-gray-800 w-16 h-16 rounded-xl p-2">
                <img class=" w-1/2" src="/img/user.png">
                <img class=" w-1/2" src="/img/user.png">
              </div>
              <div class="text-lg leading-tight">{{room}} {{ index+1 }}</div>
              <font-awesome :icon="['fas', 'chevron-right']" class="absolute right-5 text-gray-700 dark:text-gray-400" />
            </NuxtLink>
          </li>
        </ul>
      </div>

    </div>  
  </main>
</template>

<style scoped></style>
