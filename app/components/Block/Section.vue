<script setup lang="ts">
const props = defineProps(['header'])
</script>

<template>
<section class="mb-[80px] lg:mb-[150px]">
  <div v-if="header" class="container">
    <TypingHeader40 :text="header" class="mb-8 lg:mb-12"/>
  </div>
  <slot></slot>
</section>
</template>

<style scoped>

</style>