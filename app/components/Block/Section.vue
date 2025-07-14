<script setup lang="ts">
const props = defineProps(['header','width'])
</script>

<template>
<section class="mb-[80px] lg:mb-[150px]">
  <div v-if="header" class="container" :class="width ? width : 'w-full'">
    <TypingHeader40 :text="header" class="mb-8 lg:mb-12 whitespace-pre-line"/>
  </div>
  <slot></slot>
</section>
</template>

<style scoped>

</style>