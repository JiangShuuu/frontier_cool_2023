<template>
  <div class="px-5 py-2 flex">
    <div class="grid grid-cols-2 gap-4 flex-grow mr-3">
      <input type="text" v-model="item.key" @input="generateOutput()" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full" placeholder="Key" />
      <input type="text" v-model="item.value" @input="generateOutput()" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full" placeholder="Value" />
    </div>
    <button class="w-10 text-sm flex justify-center items-center bg-slate-300 text-slate-800">－</button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
defineProps<{ item: any }>()

const { generateOutput }:any = inject('generate')
</script>