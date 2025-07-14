<script setup lang="ts">
import type { BreadcrumbItem } from 'primevue/breadcrumb';
const home = ref({
  label: 'Главная',
  route: '/'
});
interface Props {

  items: BreadcrumbItem[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="container mb-6 md:mb-12">
    <Breadcrumb
        class="!p-0 !pt-5 bg-transparent"
        :home="home"
        :model="props.items"
    >
      <template #item="{ item, props }">
        <NuxtLinkLocale
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span class="text-primary font-semibold text-[10px] md:text-[16px]">{{ item.label }}</span>
          </a>
        </NuxtLinkLocale>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0 text-[10px] md:text-[16px]">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>
