<script setup lang="ts">
defineProps(['text','items'])
</script>

<template>
<BlockSection>
  <div class="container">
    <div class="grid grid-cols-12 mb-[90px] gap-4">
      <div class="col-span-12 md:col-span-3">
        <TypingGrayText>[ {{$t('about_us')}} ]</TypingGrayText>
      </div>
      <div class="col-span-12 md:col-span-9">
        <TypingHeader40 class="" :text="text"/>

        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 border-t">
      <CardSimple :bg_white="true"
                  v-for="item in items"
                  :title="item.name"
                  :text="item.description"
      >
        <template #icon>
          <img :src="item.icon" alt="">

        </template>
      </CardSimple>
    </div>
  </div>
</BlockSection>
</template>

<style scoped>

</style>