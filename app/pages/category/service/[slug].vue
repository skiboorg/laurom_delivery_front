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
      <div class="w-full md:max-w-[50%]">
        <p class="">{{service.description}}</p>

      </div>
    </template>
  </BlockTop>
  <PageBlockAbout :text="service.about_us" :items="service.features"/>
  <PageBlockStepSlider :items="service.steps"/>
  <div v-if="service.image_top" class="container mb-10">
    <img  class="w-full h-[700px] object-cover mt-12" :src="service.image_top" alt="">
  </div>

  <PageBlockPersonalPriceInfo :items="service.prices"/>
  <BlockSection>
    <div class="container">
      <BlockPriceForm/>
    </div>
  </BlockSection>

  <PageBlockDeliveryCases/>
  <PageBlockFAQ :items="service.faqs"/>
</template>

<style scoped>

</style>