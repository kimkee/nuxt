<template>
    <AppHeader v-if="showAppHeader" />
    <slot />
    <AppNav v-if="showAppNav" />
</template>

<script setup>
// 각 경로에 맞는 숨김 조건을 배열로 설정합니다
const hiddenPathsForHeader = ['/about', '/list'];
const hiddenPathsForNav = ['/chat', '/list'];

// 현재 경로를 가져옵니다
const route = useRoute();

// 경로에 따라 헤더와 네비게이션 바를 보여줄지 여부를 계산합니다
const showAppHeader = computed(() => !hiddenPathsForHeader.includes(route.path));
const showAppNav = computed(() => !hiddenPathsForNav.includes(route.path));
</script>
