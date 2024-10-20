<script setup>
import GithubButton from "./components/GithuButton.vue";
</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="grid text-center gap-2">
      <h1 class="text-4xl">About</h1>
      <GithubButton />
      <p>
        <NuxtLink to="/" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          href="/docs/guide/going-further/modules"><!----><span>Home</span><!----></NuxtLink>
      </p>
    </div>
  </main>
</template>