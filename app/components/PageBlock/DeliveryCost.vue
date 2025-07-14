<script setup lang="ts">

</script>

<template>
<BlockSection :header="$t('cost_title')" >
  <div class="container">
    <div class="grid grid-cols-1 gap-5  md:grid-cols-3 mb-[90px]">
      <div class="flex items-start gap-5">
        <p class="text-primary text-[20px] font-bold">01</p>
        <p class="max-w-[70%]">{{$t('cost_text_1')}}</p>
      </div>
      <div class="flex items-start gap-5">
        <p class="text-primary text-[20px] font-bold">02</p>
        <p class="max-w-[70%]">{{$t('cost_text_2')}}</p>
      </div>
      <div class="flex items-start gap-5">
        <p class="text-primary text-[20px] font-bold">03</p>
        <p class="max-w-[70%]">{{$t('cost_text_3')}}</p>
      </div>
    </div>
    <BlockPriceForm/>
  </div>
</BlockSection>

</template>

<style scoped>

</style>