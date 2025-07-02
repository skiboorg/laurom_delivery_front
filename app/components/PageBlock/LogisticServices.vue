<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:categories,pending} = useHttpRequest(useAsyncData(()=>$api.catalog.categories()))

</script>

<template>
  <BlockSection header="Логистические услуги">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardWithButtons
            v-for="(category,index) in categories"
            :title="category.name"
            :index="`0${index+1}`"
            primary_btn_text="Перейти к услугам"
            :primary_btn_link="`/category/${category.name_slug}`"
            :tags="category.services?.map(service => ({
                    label: service.name,
                    to: `/category/service/${service.name_slug}`
                    }))"
            :text="category.description"
        >
        </CardWithButtons>

      </div>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>