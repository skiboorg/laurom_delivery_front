<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:faqs,pending} = useHttpRequest(useAsyncData(()=>$api.catalog.faqs()))


</script>
<template>

<PageBlockOffer/>
<PageBlockLogisticServices/>
  <PageBlockHowToDeliveryWorks/>
  <PageBlockDeliveryCost/>
  <PageBlockDeliveryCases/>
  <PageBlockFAQ :items="faqs" />
</template>