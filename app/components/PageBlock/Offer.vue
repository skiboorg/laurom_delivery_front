<script setup lang="ts">

</script>

<template>
<BlockSection class="!mb-5">
  <div class="container mt-10 md:!mt-20">
    <TypingHeader50 class="text-center mb-7 " :text="$t('offer_text_0')"/>

    <div class="max-w-[1000px] m-auto relative">
      <TypingGrayText class="absolute text-center max-w-full md:max-w-[590px] md:left-[50%] md:translate-x-[-50%]">{{$t('offer_text_1')}}</TypingGrayText>
      <img class="w-full pt-14 md:pt-5"  src="~assets/map.svg">
    </div>
  </div>
</BlockSection>
</template>

<style scoped>

</style>