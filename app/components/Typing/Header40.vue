<script setup lang="ts">
defineProps(['text'])
</script>

<template>
<p class="text-[25px] lg:text-[40px] font-semibold leading-[100%] whitespace-pre-line" v-html="text"></p>
</template>

<style scoped>

</style>