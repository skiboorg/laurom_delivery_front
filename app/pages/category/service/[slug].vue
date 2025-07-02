<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug}= useRoute().params
const service = useDataOrFail(await useAsyncData(()=>$api.catalog.service(slug)))

</script>

<template>
  <PageBlockBreadcrumbs :items="[
      { label: 'Логистические услуги', route: '/category'},
      { label: service.name},

      ]"/>
  <BlockTop :header="service.name" :image="service.image_top">
    <template #text>
      <div class="max-w-[50%]">
        <p class="">{{service.description}}</p>

      </div>
    </template>
  </BlockTop>
  <PageBlockAbout :text="service.about_us" :items="service.features"/>
  <PageBlockStepSlider :items="service.steps"/>
  <PageBlockPersonalPriceInfo :items="service.prices"/>
  <BlockSection>
    <div class="container">
      <BlockPriceForm/>
    </div>
  </BlockSection>

  <PageBlockDeliveryCases/>
  <PageBlockFAQ/>
</template>

<style scoped>

</style>