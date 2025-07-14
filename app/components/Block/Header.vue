<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { locale, t, setLocale } = useI18n()

const links = [
  {label:t('menu_about'), url:'/about'},
  {label:t('menu_services'), url:'/services'},
  {label:t('menu_news'), url:'/news'},
  {label:t('menu_contacts'), url:'/contacts'},
]

const languages = [
  {name:'EN',value:'en'},
  {name:'RU',value:'ru'}
]
const mobileMenuActive = ref(false)
const selectedLang = ref(locale.value)

const switchLanguage = () => {
  console.log(selectedLang.value)
  //locale.value = selectedLang.value
  setLocale(selectedLang.value)
  //window.location.href = `/`
}
</script>

<template>
<header>
  <div class="container mb-0 md:mb-10">
    <div class="flex items-center py-6">
      <div class="flex items-center gap-12 grow">
        <NuxtLinkLocale to="/">
          <div class="flex items-center gap-4">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="5" fill="#5D91F4"/>
              <path d="M18 36C15.6276 36 13.5379 35.4286 11.731 34.2857C9.93793 33.1429 8.53103 31.5347 7.51035 29.4612C6.50345 27.3878 6 24.9551 6 22.1633V0.048979L11.0483 0V22.0163C11.0483 23.3388 11.2345 24.5224 11.6069 25.5673C11.9931 26.6122 12.5103 27.502 13.1586 28.2367C13.8069 28.9551 14.5517 29.502 15.3931 29.8776C16.2345 30.2531 17.1034 30.4408 18 30.4408C18.9241 30.4408 19.8 30.2531 20.6276 29.8776C21.469 29.4857 22.2138 28.9306 22.8621 28.2122C23.5103 27.4776 24.0207 26.5878 24.3931 25.5429C24.7655 24.498 24.9517 23.3224 24.9517 22.0163V0H30V22.1633C30 24.9551 29.4897 27.3878 28.469 29.4612C27.4621 31.5347 26.0552 33.1429 24.2483 34.2857C22.4552 35.4286 20.3724 36 18 36Z" fill="white"/>
            </svg>
            <p class="uppercase text-16px font-bold">United expo trade</p>
          </div>
        </NuxtLinkLocale>

        <nav class="hidden lg:flex  items-center gap-4">
          <NuxtLinkLocale class="text-[14px] text-gray-500" v-for="link in links" :to="link.url">{{link.label}}</NuxtLinkLocale>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-4">
        <a href="tel:8 800 333 55 70" target="_blank" class="flex items-center gap-2 border border-gray-300 rounded-md h-[40px] px-5">
          <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="4" r="3.5" fill="#5D91F4"/>
          </svg>
          <span class="font-medium">8 800 333 55 70</span>
          </a>

        <Button :label="$t('price_btn')"/>
        <Select v-model="selectedLang" :options="languages" @update:modelValue="switchLanguage" option-value="value" option-label="name"   />
      </div>
      <div class="block lg:hidden">
        <Button icon="pi pi-bars" @click="mobileMenuActive=true"/>
      </div>


    </div>
  </div>
  <Drawer v-model:visible="mobileMenuActive" header=" " position="right">
  <div class="flex flex-col items-start gap-4">

    <NuxtLinkLocale :to="link.to" v-for="(link,index) in main_menu" :key="index">{{link.label}}</NuxtLinkLocale>
    <Select fluid class="w-full" v-model="selectedLang" :options="languages" @update:modelValue="switchLanguage" option-value="value" option-label="name"   />
    <a href="tel:8 800 333 55 70" target="_blank" class="w-full">
      <Button fluid severity="primary" label="8 800 333 55 70" />
    </a>
  </div>


  </Drawer>
</header>
</template>

<style scoped>

</style>