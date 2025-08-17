<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_contacts')},
]);
useSeoMeta({
  title: t('contact_title'),
  ogTitle: t('contact_title'),
  description: t('contact_description'),
  ogDescription: t('contact_description'),
})
</script>

<template>
  <PageBlockBreadcrumbs :items="[
      { label: t('breadcrumb_contacts')},
      ]"/>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full mb-10"  src="~/assets/images/other.png" alt="">
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('breadcrumb_contacts')}}</h1>
      <p class="opacity-60  whitespace-pre-line mb-10">{{t('contacts_text')}}</p>
    </div>
  </section>

  <section class="mb-10">
    <div class="container">
      <p class="text-sm  opacity-60 mb-4 md:mb-9">{{t('contacts_tag_ru')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_ru_address1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_fact_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ru_address2')}}</p>
        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title1')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_ru_new_text_1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title2')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ru_new_text_2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/ru.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="mb-10">
    <div class="container">
      <p class="text-sm  opacity-60 mb-4 md:mb-9">{{t('contacts_tag_ar')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_ar_address1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_fact_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ar_address2')}}</p>
        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title1')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_ar_new_text_1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title2')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ar_new_text_2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/ar.png" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <div class="container">
      <p class="text-sm  opacity-60 mb-4 md:mb-9">{{t('contacts_tag_gr')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_gr_address1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_fact_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_gr_address2')}}</p>
        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title1')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_gr_new_text_1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title2')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_gr_new_text_2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/gr.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <p class="text-sm  opacity-60 mb-4 md:mb-9">{{t('contacts_tag_tr')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_tr_address1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_fact_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_tr_address2')}}</p>

        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title1')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_tr_new_text_1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_new_title2')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_tr_new_text_2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/tr.png" alt="">
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>