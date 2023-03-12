<template>
  <main class="space-y-2">
    <h1 class="text-white text-2xl font-bold">Nested Key-Value Pair Tree Viewer</h1>
    <section class="grid grid-cols-2 gap-8 min-h-[700px]">
      <LeftCard />
      <RightCard />
    </section>
  </main>
</template>

<script setup lang="ts">
import LeftCard from '~/components/LeftCard/index.vue'
import RightCard from '~/components/RightCard/index.vue'
</script>
