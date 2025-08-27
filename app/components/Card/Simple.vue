<script setup lang="ts">
defineProps(['title','text','bg_white'])
</script>

<template>
<div class="p-8 rounded-[10px]" :class="bg_white ? 'bg-white' : 'bg-gray-100 '">
  <slot name="icon"></slot>
  <TypingHeader18 :text="title" class="mt-10 mb-3 md:min-h-[42px]"/>
  <TypingGrayText>{{text}}</TypingGrayText>
</div>
</template>

<style scoped>

</style>