<script setup lang="ts">
defineProps(['to'])
</script>

<template>
  <NuxtLinkLocale class="flex items-center justify-center gap-2 border border-gray-300 rounded-md h-[36px] px-5" :to="to">
    <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.5" cy="4" r="3.5" fill="#5D91F4"/>
    </svg>
    <span class="font-medium">{{$t('more')}}</span>
  </NuxtLinkLocale>
</template>

<style scoped>

</style>