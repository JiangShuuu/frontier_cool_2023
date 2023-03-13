<template>
  <div class="ml-3 text-lg">
    <div v-for="(value, key) in data" :key="key" class="my-1">
      <span v-if="isNumber(key)" class="font-bold">
        {{ key }}: <span v-if="objectLength(value)" @click="toggleOpen()" class="cursor-pointer">{{ isOpen ? '[-]' : '[+]' }}</span>
      </span>
      <span class="recursive-component__value">
        <template v-if="isObject(value)">
          <template v-if="isOpen">
            <RecursiveComponent :data="value" :level="level + 1" />
          </template>
        </template>
        <template v-else>
          <span class="text-pink">{{ value }}</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  data: { required: true },
  level: { type: Number, required: false, default: 0},
});

const isOpen = ref(true)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const isNumber = (type:any) => {
  return typeof type !== 'number'
}

const isObject = (value:any) => {
  return typeof value === 'object' && value !== null;
}

const objectLength = (value: any) => {
  if (typeof value === 'object' ) {
    return true
  } else {
    return false
  }
}
</script>

