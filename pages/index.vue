<script setup>
useSeoMeta({ })
onMounted(() => {
  window.location.replace('/chat/');
});
</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="flex flex-col  items-center justify-center py-6 text-center">
      <h1 class="text-5xl font-bold tracking-tight text-gray-700 dark:text-white">
        The Intuitive<br>
        <span class="text-primary block lg:inline-block">Vue Framework</span>
      </h1>
      <p class="mt-6 text-lg max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-center">
        Nuxt is a hybrid Vue framework that gives you the best of both server-side and client-side rendering.
      </p>

      <p class="text-lg text-gray-500 leading-10 mt-6">
        <GithubButtons />
      </p>
    </div>
  </main>
</template>

<style lang="css" scoped>
.container {
  h1 {
    &:hover {
      /* @apply text-yellow-500; */
    }
  }
}
</style>
