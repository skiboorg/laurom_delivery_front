<script setup lang="ts">

</script>

<template>


      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 md:col-span-8">
          <div class="bg-gray-100  rounded-[10px] p-10">
            <TypingHeader40 class="mb-5" text="Рассчитать доставку"/>
            <p class="mb-10">Наша компания готова сделать под заказ доставку<br>сложных грузов или найти поставщика</p>
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" fluid placeholder="Откуда"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" fluid placeholder="Куда"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" fluid placeholder="Габариты груза"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" fluid placeholder="Вес груза"/>
              </div>
              <div class="col-span-12 md:col-span-8">
                <InputText size="small" fluid placeholder="Опишите ваш товар"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <Button fluid label="Рассчитать стоимость"/>
              </div>

            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div class="bg-primary text-white rounded-[10px] p-10 flex flex-col items-start justify-between h-full">
            <div class="">
              <TypingHeader40 class="mb-5" text="Юридические отправления"/>
              <p class="mb-4 md:mb-0">Юридические отправления рассчитываются в индивидуальном порядке нашими менеджерами. Оставьте заявку и получите расчет</p>
            </div>

            <Button severity="secondary" label="Отправить заявку"/>
          </div>
        </div>
      </div>


</template>

<style scoped>

</style>