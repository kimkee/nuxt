<script setup>
useSeoMeta({
  title: '넉스톤:Nuxton',
  ogTitle: '넉스톤:Nuxton',
  description: 'Nuxt.js + Supabase PWA 앱',
  ogDescription: 'Nuxt.js + Supabase PWA 앱',
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
