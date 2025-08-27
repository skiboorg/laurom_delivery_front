<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {$api} = useNuxtApp()
const {slug}= useRoute().params
const service = useDataOrFail(await useAsyncData(()=>$api.catalog.service(slug)))
const { t } = useI18n()

useSeoMeta({
  title: service.value.name,
  ogTitle: service.value.name,
  description: service.value.description,
  ogDescription: service.value.description,
})

</script>

<template>
  <PageBlockBreadcrumbs :items="[
      { label: $t('logistik_service_title'), route: '/category'},
      { label: service.name},

      ]"/>
  <BlockTop :header="service.name" :image="service.image_top">
    <template #text>
      <div class="w-full md:max-w-[50%] mb-5 md:mb-10">
        <p class="">{{service.description}}</p>
      </div>
      <div class="flex items-center gap-5">
        <a href="#form">
          <Button :label="$t('price_btn')"/>
        </a>
        <a href="tel:8 800 333 55 70" target="_blank" class="flex items-center gap-2 border border-gray-300 rounded-md h-[40px] px-5">
          <span class="font-medium">{{$t('call_btn')}}</span>
        </a>
      </div>
    </template>
  </BlockTop>
  <PageBlockAbout :text="service.about_us" :items="service.features"/>
  <PageBlockStepSlider :items="service.steps"/>
  <div v-if="service.image_middle" class="container mb-10 md:mb-[120px]">
    <img  class="w-full  mt-12" :src="service.image_middle" alt="">
  </div>


  <BlockSection>
    <div class="container">
      <div class="grid grid-cols-12 mb-[70px] gap-4">
        <div class="col-span-12 md:col-span-9 order-2 md:order-1">
          <TypingHeader40 class="" :text="service.price_calc_title"/>
        </div>
        <div class="col-span-12 md:col-span-3 order-1 md:order-2">
          <TypingGrayText class="text-right">[ {{service.price_calc_small_title}} ]</TypingGrayText>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-start-6 md:col-end-13 ">
          <div class="grid grid-cols-12 items-center  border-t border-[#E5E5E5]] last:border-b py-5" v-for="(item,index) in service.price_calc_items">

            <div class="col-span-1 text-[#5D91F4] text-sm">0{{index+1}}</div>
            <div class="col-span-11"> <p >{{item.name}}</p></div>
          </div>

        </div>
      </div>
    </div>
  </BlockSection>

  <PageBlockPersonalPriceInfo :items="service.prices"/>
  <BlockSection >
    <div class="container">
      <BlockPriceForm id="form"/>
    </div>
  </BlockSection>

  <PageBlockDeliveryCases/>
  <PageBlockFAQ :items="service.faqs"/>
</template>

<style scoped>

</style>