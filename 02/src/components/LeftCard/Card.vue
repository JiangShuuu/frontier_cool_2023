<template lang="pug">
div.px-5.py-2.flex
  div.grid.grid-cols-2.gap-4.flex-grow.mr-3
    input(type="text", v-model="item.key", @input="generateOutput()", class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full", placeholder="Key")
    input(type="text", v-model="item.value", @input="generateOutput()", class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full", placeholder="Value")
  button.w-10.text-sm.flex.justify-center.items-center.bg-slate-300.text-slate-800(@click="removeItem(item)") －
</template>

<script lang="ts" setup>
import { inject } from 'vue';

interface TypeItem {
  uuid: string,
  key: string,
  value: string
}
defineProps<{ item: TypeItem }>()

const { generateOutput, removeItem }:any = inject('generate')
</script>