<script setup lang="ts">
const props = defineProps(['items'])
</script>

<template>
  <BlockSection>
    <div class="container">
      <div class="grid grid-cols-12 mb-[70px] gap-4">
        <div class="col-span-12 md:col-span-9 order-2 md:order-1">
          <TypingHeader40 class="" :text="$t('service_price_title')"/>
        </div>
        <div class="col-span-12 md:col-span-3 order-1 md:order-2">
          <TypingGrayText class="text-right">[ {{$t('service_price_title_tag')}} ]</TypingGrayText>
        </div>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-b py-12 gap-5 md:gap-0">
        <div

            :class="[
      'border-none md:border-r',
      'h-full',
      index === 0 ? 'flex flex-col items-start justify-between' : 'pl-0 md:pl-10 flex flex-col items-start justify-between',

    ]"
            v-for="(item, index) in items">
          <div>
            <TypingHeader26 class="mb-5" :text="item.name" />
            <p class="mb-10">{{item.description}}</p>

          </div>
          <div class="flex gap-3">
            <Button severity="secondary" :label="item.price"/>
            <Button label="Рассчитать стоимость"></Button>
          </div>

        </div>
<!--        <div class="border-r pl-10 flex flex-col items-start justify-between h-full">-->
<!--          <div>-->
<!--            <TypingHeader26 class="mb-5" text="Перевозка<br>стандартного контейнера"/>-->
<!--            <p>Небольшой пакет весом около 1 кг, доставка по территории России</p>-->
<!--          </div>-->
<!--          <div class="flex gap-3">-->
<!--            <Button severity="secondary" label="от 800₽ до 2.500₽"/>-->
<!--            <Button label="Рассчитать стоимость"></Button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="pl-10 flex-col items-start justify-between h-full">-->
<!--          <div>-->
<!--            <TypingHeader26 class="mb-5" text="Международные<br>рейсы"/>-->
<!--            <p class="mb-4">Зависят от дальности полета, страны происхождения и конечного пункта назначения. Например, международные перевозки одного килограмма груза могут варьироваться от нескольких сотен долларов до тысячи и больше, особенно если речь идет о доставке на значительные расстояния.</p>-->
<!--          </div>-->
<!--          <div class="flex gap-3">-->
<!--            <Button severity="secondary" label="от 800₽ до 2.500₽"/>-->
<!--            <Button label="Рассчитать стоимость"></Button>-->
<!--          </div>-->
<!--        </div>-->
      </div>

    </div>
  </BlockSection>

</template>

<style scoped>

</style>