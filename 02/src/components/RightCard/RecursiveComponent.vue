<template lang="pug">
div.ml-3.text-lg
  template(v-for="(value, key) in data" :key="key")
    div.my-1
      span.font-bold(v-if="isNumber(key)")
        | {{ key }} :
        span(v-if="objectLength(value)" @click="toggleOpen()" class="cursor-pointer")
          | {{ isOpen ? '[-]' : '[+]' }}
      span
        template(v-if="isObject(value)")
          template(v-if="isOpen")
            RecursiveComponent(:data="value" :level="level + 1")
        template(v-else)
          span.text-pink.ml-2 {{ value }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  data: { required: true },
  level: { type: Number, required: false, default: 0},
});

const isOpen = ref(true)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const isNumber = (type: any) => {
  return typeof type !== 'number'
}

const isObject = (value: any) => {
  return typeof value === 'object' && value !== null;
}

const objectLength = (value: any) => {
  if (typeof value === 'object' ) return true
}
</script>

