<template>
  <div class="border border-blue text-white">
    <!-- <div class="flex items-center justify-end p-3">
      <button class="bg-white px-2 py-2.5 font-bold">+ Add New Pair</button>
    </div>
    <Card /> -->
    <div>
      <div v-for="(item, index) in items" :key="index">
        <label>
          Key:
          <input type="text" v-model="item.key" @input="$emit('generate-output')">
        </label>
        <label>
          Value:
          <input type="text" v-model="item.value" @input="$emit('generate-output')">
        </label>
      </div>
      <button @click="$emit('add-item')">Add Item</button>
      <!-- <div>
        <pre>{{ input.output }}</pre>
      </div> -->
    </div>
    <!-- <pre>{{ input.output }}</pre> -->
    <!-- <RecursiveComponent :data="output" /> -->
  </div>
</template>
<script lang="ts" setup>
import Card from './Card.vue'
import RecursiveComponent from '../RightCard/RecursiveComponent.vue';

interface Items {
  key: string,
  value: string,
}

defineProps<{ items: any; output: any; }>();
defineEmits(['add-item', 'generate-output'])

</script>
