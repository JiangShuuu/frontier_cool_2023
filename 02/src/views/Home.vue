<template lang="pug">
main.space-y-2
  h1.text-white.text-2xl.font-bold Nested Key-Value Pair Tree Viewer
  section(class="grid grid-cols-2 gap-8 min-h-[700px]")
    LeftCard(:items="input.items" @add-item="addItem")
    RightCard(:output="input.output")
</template>

<script setup lang="ts">
import LeftCard from '~/components/LeftCard/index.vue'
import RightCard from '~/components/RightCard/index.vue'
import { reactive, onMounted, provide } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { reverse, uniqBy }from 'lodash'

export interface TypeItem {
  uuid: string,
  key: string,
  value: string
}

onMounted(() => {
  modal.generateOutput()
})

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

const modal: any = {
  generateOutput: () => {
    input.output = [];

    // 先複製現有陣列, 並透過 uniqBy 剔除重複的 key 物件, 並且使用 reverse 保留最後一個
    const itemsNews = JSON.parse(JSON.stringify(input.items));
    const uniqueItems = reverse(uniqBy(reverse(itemsNews), 'key'));

    uniqueItems.forEach((item: any) => {
      if (item.key) {
        const obj:any = {};

        // 將 key 以 . 分隔成陣列
        const keys = item.key.split('.');
        
        // 取最後一個為 obj 的屬性名稱，將其值設為 item.value
        obj[keys[keys.length - 1]] = item.value;
        let arrRef = input.output as any;

        keys.forEach((key:any, index:any) => {
          if (!key) return
          // 如果是最後一個屬性，將 obj 新增到 arrRef 陣列中
          if (index === keys.length - 1) {
            arrRef.push(obj);
          } else {
            // 否則，在 arrRef 陣列中找到具有相同 key 的物件，並將其賦值給 objRef
            let objRef = arrRef.find((a:any) => a[key] !== undefined);
            // 如果找不到 objRef，則建立一個新的物件，並將其新增到 arrRef 陣列中
            if (!objRef) {
              objRef = {};
              arrRef.push(objRef);
            }
            // 將 objRef 的 key 屬性設為一個陣列，或取出現有陣列
            arrRef = objRef[key] = objRef[key] || [];
          }
        });
      }
    });
  },
  removeItem: (data: TypeItem) => {
    const itemNews = input.items.filter((item: TypeItem) => item.uuid !== data.uuid)
    input.items = itemNews
  }
};

provide('generate', modal)

</script>

