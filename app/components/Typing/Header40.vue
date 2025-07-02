<script setup lang="ts">
defineProps(['text'])
</script>

<template>
<p class="text-[25px] lg:text-[40px] font-bold leading-[100%]" v-html="text"></p>
</template>

<style scoped>

</style>