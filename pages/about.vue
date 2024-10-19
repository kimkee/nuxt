
<script setup>
import GithubButton from "./components/GithuButton.vue";
</script>
<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="grid text-center gap-2">
      <h1 class="text-4xl">About</h1>
      <GithubButton />
      <p> <NuxtLink to="/">Home</NuxtLink> </p>
    </div>
  </main>
</template>