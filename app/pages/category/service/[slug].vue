<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {$api} = useNuxtApp()
const {slug}= useRoute().params
const service = useDataOrFail(await useAsyncData(()=>$api.catalog.service(slug)))
const { t } = useI18n()

useSeoMeta({
  title: t('cases_title'),
  ogTitle: t('cases_title'),
  description: t('cases_description'),
  ogDescription: t('cases_description'),
})

</script>

<template>
  <PageBlockBreadcrumbs :items="[
      { label: $t('logistik_service_title'), route: '/category'},
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