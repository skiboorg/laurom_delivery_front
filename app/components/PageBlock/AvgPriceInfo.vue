<script setup lang="ts">

</script>

<template>
  <BlockSection>
    <div class="container">
      <div class="grid grid-cols-12 mb-[70px]">
        <div class="col-span-9">
          <TypingHeader40 class="" text="Средняя стоимость авиаперевозки<br> зависит от множества факторов, среди которых основными являются:"/>
        </div>
        <div class="col-span-3">
          <TypingGrayText class="text-right">[ Расчет стоимости]</TypingGrayText>
        </div>

      </div>
      <div class="grid grid-cols-12">
        <div v-for="i in 8" class="col-start-6 col-end-13  grid grid-cols-12 border-t py-5">
          <div class="col-span-1 text-primary">0{{i}}</div>
          <div class="col-span-11">Вес и объем груза</div>
        </div>
      </div>

    </div>
  </BlockSection>

</template>

<style scoped>

</style>