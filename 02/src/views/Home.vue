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
import { ref, reactive, onMounted, provide } from 'vue'

const input = reactive({
  items: [
    { key: 'nav.header.creator', value: '3D Fabric Creator' },
    { key: 'nav.icon', value: 'Icon name' },
    { key: 'nav.header.product', value: 'Product' },
    { key: 'common.feature.experience', value: 'Try It Now!' },
    { key: 'common.feature.chooseFabric', value: 'Choose Fabric' }
  ],
  output: []
});

function addItem() {
  input.items.push({ key: '', value: '' });
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
  }
};

// function generateOutput() {
  
// }

provide('generate', modal)

</script>

