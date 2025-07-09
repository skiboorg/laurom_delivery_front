<script setup lang="ts">
defineProps(['header', 'image'])
</script>

<template>
<BlockSection>
  <div class="container">
    <TypingHeader50 :text="header" class="mb-5"/>
    <slot name="text"></slot>
    <img v-if="image" class="w-full h-[700px] object-cover mt-12" :src="image" alt="">
  </div>

  <div class="container">
    <slot name="content">
    </slot>
  </div>

</BlockSection>
</template>

<style scoped>

</style>