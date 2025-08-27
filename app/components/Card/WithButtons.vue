<script setup lang="ts">
defineProps(['title','text','tags','primary_btn_text','primary_btn_link','index'])
</script>

<template>
  <div class="bg-gray-100 p-8 rounded-[10px]">
    <slot name="icon"></slot>
    <div class="flex items-start gap-2 mb-5 pb-5 border-b">
      <TypingHeader26 :text="title"/>
      <p v-if="index" class="text-[12px] text-gray-500">{{index}}</p>
    </div>

    <div v-if="tags" class="flex gap-2 flex-wrap mb-5">
      <NuxtLinkLocale class="text-[12px] font-medium border flex items-center gap-2 border-black px-5 py-2 rounded-[5px]" v-for="tag in tags" :to="tag.to">

        <img :src="tag.icon" alt="">
        {{tag.label}}
      </NuxtLinkLocale>
    </div>
    <TypingGrayText class="mb-12">{{text}}</TypingGrayText>
    <div v-if="primary_btn_text" class="flex gap-3">
      <NuxtLinkLocale :to="primary_btn_link">
        <Button  :label="primary_btn_text"/>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped>

</style>