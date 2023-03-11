<template>
	<div class="py-3 space-y-2 relative">
		<div class="relative">
			<img :src="data.avatar" :alt="data.avatar" class="w-48 h-48 object-cover" />
			<div class="absolute bottom-0 right-0 text-red cursor-pointer">
				<Icon v-if="isFavorite" icon="mdi:cards-heart" class="w-7 h-7" @Click="$emit('remove-favorite', data)" />
				<Icon v-else icon="mdi:cards-heart-outline" class="w-7 h-7" @Click="$emit('add-favorite', data)" />
			</div>
		</div>
		<div>{{ data.name }}</div>
	</div>
</template>

<script lang="ts" setup>
import { TypeDummyData } from '~/vue-query/dummydata';
import { Icon } from '@iconify/vue';

defineEmits(['add-favorite', 'remove-favorite']);
defineProps<{ data: TypeDummyData; isFavorite: boolean }>();
</script>
