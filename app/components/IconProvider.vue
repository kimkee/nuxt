<script setup>
const props = defineProps(['provider']);
const provider = ref(props.provider || null);
if (provider.value.name == 'kakao') {
    provider.value.name = 'kakao-talk'
    provider.value.cate = 'fab'
}
// console.log(`${provider.value.name} ${provider.value.cate} ${provider.value.class}`);

</script>

<template>
  <font-awesome :class="provider.class" :icon="[provider.cate, provider.name]" />
  <!-- <p>{{ provider.cate }}{{ provider.name }}</p> -->
</template>
