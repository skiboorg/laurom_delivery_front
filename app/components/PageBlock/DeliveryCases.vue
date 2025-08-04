<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:cases,pending} = useHttpRequest(useAsyncData(()=>$api.catalog.cases()))

</script>

<template>
<BlockSection :header="$t('case_title')">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div v-for="(case_item, index) in cases" class="bg-gray-100 rounded-[10px] p-4 md:p-10">
        <div class="rounded-[7px] relative bg-no-repeat bg-center bg-cover h-[200px] md:h-[330px] mb-5"
             :style="`background-image: url(${case_item.image})`"
        >
          <div v-if="case_item.tags.length>0" class="absolute flex gap-2 flex-wrap top-5 left-5">
            <Button v-for="tag in case_item.tags" size="small" :label="tag.name" severity="secondary"/>
          </div>
        </div>
        <TypingGrayText class="mb-">{{case_item.date}}</TypingGrayText>
        <div class="grid grid-cols-12 items-end gap-5">
          <div class="col-span-8">
            <TypingHeader26 class="" :text="case_item.name"/>
          </div>
          <div class="col-span-4">
            <UIDotButton :to="`/cases/${case_item.name_slug}`"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</BlockSection>
</template>

<style scoped>

</style>