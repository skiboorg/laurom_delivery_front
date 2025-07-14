<script setup lang="ts">
defineProps(['text'])
</script>

<template>
  <p class="text-[30px] lg:text-[50px] font-bold leading-[100%] whitespace-pre-line" v-html="text"></p>
</template>

<style scoped>

</style>