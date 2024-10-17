<template>
  <main class="container flex-1">
    <h1>Page Not Found</h1>
    <NuxtLink to="/">Go to Home</NuxtLink>
  </main>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
