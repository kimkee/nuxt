<script setup>
useSeoMeta({
  title: '넉스트:Nuxt',
  ogTitle: '넉스트:Nuxt',
  description: 'Nuxt.js PWA 앱',
  ogDescription: 'Nuxt.js PWA 앱',
  ogImage: 'https://nuxton.pages.dev/img/ogimage.png',
  ogUrl: 'https://nuxton.pages.dev/',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div class="wrap min-h-dvh flex flex-col">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
