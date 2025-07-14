<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { t } = useI18n()
const links = [
  {label:t('menu_about'), url:'/about'},
  {label:t('menu_services'), url:'/services'},
  {label:t('menu_news'), url:'/news'},
  {label:t('menu_contacts'), url:'/contacts'},
]
</script>

<template>
  <footer>
    <div class="container">
      <div class=" py-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-36  ">
        <div class="bg-primary p-3 flex flex-col items-start justify-between rounded-md h-[300px]">
          <p class="text-white text-xl">{{t('footer_news')}}</p>
          <div class="w-full flex items-center justify-between">
            <a class="text-sm opacity-50 text-white " href="mailto:info@test.ru">info@test.ru</a>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.4999 19.9999C39.4999 30.7695 30.7695 39.4999 19.9999 39.4999C9.23042 39.4999 0.5 30.7695 0.5 19.9999C0.5 9.23042 9.23042 0.5 19.9999 0.5C30.7695 0.5 39.4999 9.23042 39.4999 19.9999Z" stroke="white"/>
              <path d="M12.667 27.3334L27.3336 12.6667M27.3336 12.6667V27.3334M27.3336 12.6667H12.667" stroke="white" stroke-linecap="square"/>
            </svg>

          </div>

        </div>
        <div class="">
          <p class="text-sm opacity-60 mb-6">{{t('footer_menu')}}</p>
          <div class="flex flex-col">
            <NuxtLinkLocale class="opacity-80 text-sm" :to="link.url" v-for="(link,index) in links" :key="index">{{link.label}}</NuxtLinkLocale>
          </div>
        </div>
        <div class="flex flex-col items-start justify-between">
          <div class="flex flex-col items-start">
            <p class="text-sm opacity-60 mb-6">{{t('footer_contact')}}</p>
            <a class="text-xl font-bold"  href="tel:+000">+7 000</a>
            <a class="text-xl font-bold"  href="mailto:info@test.ru">info@test.ru</a>


          </div>
          <div class="">
            <p class="text-sm opacity-60 mb-6">{{t('footer_address')}}</p>
            <p class="text-sm opacity-60 ">{{t('footer_address1')}}<br>{{t('footer_address2')}}</p>
          </div>

        </div>
        <div class="flex flex-col items-start justify-between">
          <div class="">
            <p class="text-sm opacity-60 mb-6">{{t('footer_time')}}</p>

            <p class="text-xl font-bold" >{{t('contacts_time_msk_val')}}</p>
          </div>
          <Button fluid severity="contrast" label="Заказать звонок"/>

        </div>
      </div>
      <div class="flex items-center border-b gap-10 py-6 flex-wrap">

        <p class="opacity-60">Политика конфиденциальности</p>
        <p  class="opacity-60">Публичная оферта</p>
      </div>
      <div class="flex items-center justify-between py-6 flex-wrap">

        <p class="opacity-60">© 2010 - 2025 United Expo Trade</p>
        <p  class="opacity-60"><a href="https://www.instagram.com/vkryaz/" target="_blank">Website Development</a></p>
      </div>

    </div>
  </footer>
</template>

<style scoped>

</style>