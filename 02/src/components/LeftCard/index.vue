<template lang="pug">
div.border.border-blue
  div.flex.items-center.justify-end.p-3
    button(class="bg-white px-2 py-2.5 font-bold" @click="$emit('add-item')") + Add New Pair
  template(v-for="(item, index) in items" :key="index")
    Card(:item="item")
</template>
<script lang="ts" setup>
import Card from './Card.vue'
import { TypeItem } from '~/views/Home.vue'

defineProps<{ items: TypeItem[] }>();
defineEmits(['add-item', 'generate-output'])
</script>
