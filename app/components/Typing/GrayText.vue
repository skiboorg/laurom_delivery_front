<script setup lang="ts">
defineProps(['text'])
</script>

<template>
  <p class="text-gray-500 leading-[150%] tracking-[1%]">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>