<template lang="pug">
div.border.border-blue.text-white.pt-8
  RecursiveComponent(:data="output")
</template>
<script lang="ts" setup>
import RecursiveComponent from './RecursiveComponent.vue'
defineProps<{ output: object }>();
</script>