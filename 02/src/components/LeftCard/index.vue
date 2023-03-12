<template>
  <div class="border border-blue">
    <div class="flex items-center justify-end p-3">
      <button class="bg-white px-2 py-2.5 font-bold">+ Add New Pair</button>
    </div>
    <Card />
  </div>
</template>
<script lang="ts" setup>
import Card from './Card.vue'
</script>