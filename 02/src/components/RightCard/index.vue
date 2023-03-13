<template lang="pug">
div.border.border-blue.text-white.pt-8
  RecursiveComponent(:data="output")
</template>
<script lang="ts" setup>
import RecursiveComponent from './RecursiveComponent.vue'
defineProps<{ output: object }>();
</script>

<style lang="postcss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 1em;
}

.key {
  color: blue;
}

.value {
  color: green;
}
</style>