<template>
  <main class="space-y-2">
    <h1 class="text-white text-2xl font-bold">Nested Key-Value Pair Tree Viewer</h1>
    <section class="grid grid-cols-2 gap-8 min-h-[700px]">
      <LeftCard :items="input.items" @add-item="addItem" />
      <RightCard :output="input.output" />
    </section>
  </main>
</template>

<script setup lang="ts">
import LeftCard from '~/components/LeftCard/index.vue'
import RightCard from '~/components/RightCard/index.vue'
import { reactive, onMounted, provide } from 'vue'
import { v4 as uuidv4 } from 'uuid';

const input = reactive({
  items: [
    { uuid: uuidv4(), key: 'nav.header.creator', value: '3D Fabric Creator' },
    { uuid: uuidv4(),key: 'nav.icon', value: 'Icon name' },
    { uuid: uuidv4(),key: 'nav.header.product', value: 'Product' },
    { uuid: uuidv4(),key: 'common.feature.experience', value: 'Try It Now!' },
    { uuid: uuidv4(),key: 'common.feature.chooseFabric', value: 'Choose Fabric' }
  ],
  output: []
});

function addItem() {
  input.items.push({ uuid: uuidv4(), key: '', value: '' });
}

onMounted(() => {
  modal.generateOutput()
})

const modal: any = {
  generateOutput: () => {
    input.output = [];

    input.items.forEach((item:any) => {
      if (item.key) {
        const obj:any = {};
        const keys = item.key.split('.');
        obj[keys[keys.length-1]] = item.value;

        let arrRef = input.output as any;
        keys.forEach((key:any, index:any) => {
          if (!key) return
          if (index === keys.length - 1) {
            arrRef.push(obj);
          } else {
            let objRef = arrRef.find((a:any) => a[key] !== undefined);
            if (!objRef) {
              objRef = {};
              arrRef.push(objRef);
            }
            arrRef = objRef[key] = objRef[key] || [];
          }
        });
      }
    });
  },
  removeItem: (data:any) => {
    const itemNews = input.items.filter((item:any) => item.uuid !== data.uuid)
    input.items = itemNews
  }
};

provide('generate', modal)

</script>

