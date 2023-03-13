<template>
  <div class="recursive-component">
    <div v-for="(value, key) in data" :key="key" class="recursive-component__item">
      <span v-if="typeof key !== 'number'" class="recursive-component__key">
        {{ key }}:
      </span>
      <span class="recursive-component__value ">
        <template v-if="isObject(value)">
          <RecursiveComponent :data="value" :level="level + 1" />
        </template>
        <template v-else>
          <span class="text-pink">{{ value }}</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  data: { required: true },
  level: { type: Number, required: false, default: 0},
});

function isObject(value:any) {
  return typeof value === 'object' && value !== null;
}
// function getObjectKey(obj:any) {
//   return Object.keys(obj)[0];
// }
// function getObjectValues(obj:any) {
//   return Object.values(obj)[0];
// }
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

