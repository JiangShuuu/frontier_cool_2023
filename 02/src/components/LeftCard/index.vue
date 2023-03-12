<template>
  <div class="border border-blue text-white">
    <!-- <div class="flex items-center justify-end p-3">
      <button class="bg-white px-2 py-2.5 font-bold">+ Add New Pair</button>
    </div>
    <Card /> -->
    <div>
    <div v-for="(item, index) in input.items" :key="index">
      <label>
        Key:
        <input type="text" v-model="item.key" @input="generateOutput()">
      </label>
      <label>
        Value:
        <input type="text" v-model="item.value" @input="generateOutput()">
      </label>
    </div>
    <button @click="addItem">Add Item</button>
    <div>
      <pre>{{ input.output }}</pre>
    </div>
  </div>
  </div>
</template>
<script lang="ts" setup>
import Card from './Card.vue'
import { ref, reactive } from 'vue'

const input = reactive({
  items: [
    { key: 'a.b.c', value: '1' },
    { key: 'a.b.d', value: '2' },
    { key: 'a.e.f', value: '3' }
  ],
  output: {}
});

function addItem() {
  input.items.push({ key: '', value: '' });
}

function generateOutput() {
  input.output = {};

  input.items.forEach((item:any) => {
    if (item.key && item.value) {
      let objRef = input.output as any;
      const keys = item.key.split('.');
      keys.forEach((key:any, index:any) => {
        if (!key) return
        if (index === keys.length - 1) {
          objRef[key] = item.value;
        } else {
          if (!objRef.hasOwnProperty(key)) {
            objRef[key] = {};
          }
          objRef = objRef[key];
        }
      });
    }
  });
}

</script>