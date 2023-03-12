<template lang="pug">
div(class="h-screen w-full flex items-center justify-center space-x-4")
  Icon(icon="material-symbols:error-outline-rounded", class="w-40 h-40")
  p(class="text-red text-2xl") 伺服器錯誤, 有可能是短時間內重整太多次, 請稍後再試！
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
