<script setup lang="ts">
defineProps(['items'])
</script>

<template>
<BlockSection>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2">
     <TypingHeader40 :text="$t('about_faq_title')" class="mb-4"/>


        <div class="card">
          <Accordion value="0">
            <AccordionPanel :value="index" v-for="(item, index) in items" :key="index">
              <AccordionHeader>
                <div class="flex items-start gap-3">
                  <p class="text-[12px] text-gray-500">0{{index+1}}</p>
                  <p>{{item.q}}</p>
                </div>
              </AccordionHeader>
              <AccordionContent>
                <p class="m-0">{{item.a}}</p>
              </AccordionContent>
            </AccordionPanel>

          </Accordion>
        </div>


    </div>
  </div>
</BlockSection>
</template>

<style scoped>

</style>