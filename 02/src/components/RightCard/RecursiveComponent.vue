<template>
  <div class="recursive-component text-lg">
    <div v-for="(value, key) in data" :key="key" class="recursive-component__item">
      <span v-if="isNumber(key)" class="recursive-component__key flex">
        {{ key }}: <p v-if="objectLength(value)" @click="toggleOpen()" class="cursor-pointer">{{ isOpen ? '[-]' : '[+]' }}</p>
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

<style lang="postcss" scoped>
.recursive-component {
  margin-left: 10px;
}
.recursive-component__key {
  font-weight: bold;
}
.recursive-component__item {
  margin-bottom: 5px;
}
</style>

