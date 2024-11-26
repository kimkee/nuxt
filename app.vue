<script setup>
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;
useSeoMeta({
  title: '넉스톤:Nuxton',
  ogTitle: '넉스톤:Nuxton',
  description: 'Nuxt.js + Supabase PWA 앱',
  ogDescription: 'Nuxt.js + Supabase PWA 앱',
  ogImage: `${SITE_URL}img/ogimage.png`,
  ogUrl: `${SITE_URL}`,
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
