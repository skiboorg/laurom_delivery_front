<template>
  <div @click="isActive = !isActive" class="cursor-pointer transition-all duration-300">
    <!-- Состояние по умолчанию -->
    <div
        v-if="!isActive"
        class="flex flex-col items-center justify-around w-[210px] h-[480px]  border rounded-xl shadow-sm hover:bg-gray-50"
    >
      <span class="text-4xl text-blue-500 block mb-32">+</span>
      <TypingHeader26 text="Подготовка " class="rotate-[-90deg] mb-20"/>
    </div>

    <!-- Активное состояние -->
    <div
        v-else
        class=" w-[440px] h-full p-6 border rounded-xl shadow-md"
    >
      <span class="text-sm text-blue-500 mb-2 block">[ 02 ]</span>
      <TypingHeader26 class="pb-5 mb-5 border-b" text="Организация упаковки и маркировки "/>


        <TypingGrayText class="mb-7">
          Первым этапом начинается работа с клиентом. Здесь важно определить
          требования заказчика относительно вида и количества отправляемого
          груза, предполагаемых сроков поставки, места назначения и возможных
          ограничений (например, температурные режимы хранения). После
          согласования ключевых моментов формируется индивидуальное коммерческое
          предложение...
        </TypingGrayText>
        <UIDotButton/>



    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>
