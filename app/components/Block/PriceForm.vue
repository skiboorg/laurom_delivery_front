<script setup lang="ts">
const form = ref({
  otkuda:null,
  kuda:null,
  gab:null,
  ves:null,
  text:null,
})
const is_send = ref(false)
const loading = ref(false)
const {$api} = useNuxtApp()

const send = async () => {
  loading.value = true
  await $api.catalog.form(form.value)
  loading.value = false
  is_send.value = true
}
</script>

<template>


      <div id="form" class="grid grid-cols-12 gap-5">
        <div class="col-span-12 md:col-span-8">
          <div class="bg-gray-100  rounded-[10px] p-5 md:p-10">
            <TypingHeader40 class="mb-5" :text="$t('form_title_1')"/>
            <p class="mb-10">{{$t('form_text_1')}}</p>
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" v-model="form.otkuda" fluid :placeholder="$t('form_item_1')"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" v-model="form.kuda" fluid :placeholder="$t('form_item_2')"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" v-model="form.gab" fluid :placeholder="$t('form_item_3')"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputText size="small" fluid v-model="form.ves" :placeholder="$t('form_item_4')"/>
              </div>
              <div class="col-span-12 md:col-span-8">
                <InputText size="small" fluid v-model="form.text" :placeholder="$t('form_item_5')"/>
              </div>
              <div class="col-span-12 md:col-span-4">
                <Button @click="send" :loading="loading" fluid :label="$t('price_btn')"/>
                <p v-if="is_send" class="text-center text-green-500 font-medium mt-4">{{$t('form_send')}}</p>
              </div>

            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div class="bg-primary text-white rounded-[10px] p-5 md:p-10 flex flex-col items-start justify-between h-full">
            <div class="">
              <TypingHeader40 class="mb-5" :text="$t('form_title_2')"/>
              <p class="mb-4 md:mb-0">{{$t('form_text_2')}}</p>
            </div>

<!--            <Button severity="secondary" :label="$t('send_btn')"/>-->
          </div>
        </div>
      </div>


</template>

<style scoped>

</style>