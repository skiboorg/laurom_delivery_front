<script setup lang="ts">
const props = defineProps(['items'])
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const carousel = ref(null)
const config = {
  itemsToShow:1,

  breakpointMode: 'carousel',
  wrapAround: true,
  //autoplay:1000,

  breakpoints:{
    // 700px and up
    700: {
      itemsToShow: 1,
      gap:10,
      snapAlign: 'start',
    },
    // 1024 and up
    1024: {
      itemsToShow: 1,
      snapAlign:'start',
      gap: 0,

    },
    1300: {
      itemsToShow: 3,
      snapAlign:'start',
      gap: 0,

    },
  }
};
</script>

<template>
  <BlockSection>
    <div class="container">
      <div class="flex mb-12 items-end justify-between">
        <TypingHeader40 text="Этапы оказания<br>услуги авиаперевозок"/>
        <div class="flex  gap-3">
          <Button severity="contrast" @click="carousel.prev()" icon-class="text-sm" icon="pi pi-arrow-left"/>
          <Button severity="contrast" @click="carousel.next()" icon-class="text-sm" icon="pi pi-arrow-right" icon-pos="right" label="Следующие этапы"/>
        </div>
      </div>
      <Carousel v-if="items && items.length > 0" ref="carousel" v-bind="config" >
        <Slide v-for="(item,index) in items" :key="index">

          <div class="border rounded-[10px] p-7 w-[440px]">
            <p class="text-primary mb-7">[{{item.number}}]</p>
            <TypingHeader26 class="mb-5 pb-5 border-b" :text="item.name"/>
            <TypingGrayText >{{item.description}}</TypingGrayText>

          </div>
        </Slide>
      </Carousel>

    </div>
  </BlockSection>

</template>

<style scoped>

</style>