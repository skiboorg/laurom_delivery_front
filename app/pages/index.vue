<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:faqs,pending} = useHttpRequest(useAsyncData(()=>$api.catalog.faqs()))
const { t } = useI18n()
useSeoMeta({
  title: t('index_title'),
  ogTitle: t('index_title'),
  description: t('index_description'),
  ogDescription: t('index_description'),
})
</script>
<template>

<PageBlockOffer/>
<PageBlockLogisticServices/>
  <PageBlockHowToDeliveryWorks/>
  <PageBlockDeliveryCost/>
  <PageBlockDeliveryCases/>
  <PageBlockFAQ :items="faqs" />
</template>