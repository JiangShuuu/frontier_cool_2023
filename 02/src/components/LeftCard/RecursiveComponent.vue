<template>
  <div>
    <!-- {{ typeof data }} -->
    <template v-if="typeof data === 'object'">
      <ul>
        <li v-for="(value, key) in data" :key="key">
          <span class="key">{{ key }}:</span>
          <RecursiveComponent :data="value" />
        </li>
      </ul>
    </template>
    <template v-else-if="typeof data === 'string'">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <span class="border-4">{{ item }}</span>
          <RecursiveComponent :data="item" />
        </li>
      </ul>
    </template>
    <!-- <template v-if="Array.isArray(data)">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <RecursiveComponent :data="item" />
        </li>
      </ul>
    </template>
    <template v-else>
      <ul>
        <li v-for="(value, key) in data" :key="key">
          <span class="key">{{ key }}:</span>
          <RecursiveComponent :data="value" />
        </li>
      </ul>
    </template> -->
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>();
</script>

