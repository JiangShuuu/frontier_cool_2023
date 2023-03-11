<template>
	<div class="py-3 space-y-2">
		<img :src="data.avatar" :alt="data.avatar" class="w-48 h-48 object-cover" />
		<div>{{ data.name }}</div>
	</div>
</template>

<script lang="ts" setup>
import { TypeDummyData } from '~/vue-query/dummydata';

defineProps<{ data: TypeDummyData }>();
</script>
