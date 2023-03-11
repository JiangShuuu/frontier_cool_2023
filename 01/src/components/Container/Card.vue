<template>
	<div class="py-3 space-y-2 relative w-48">
		<div class="relative">
			<img v-if="!error" :src="data.avatar" :alt="data.avatar" class="w-48 h-48 object-cover" @load="hideLoading" @error="handleError" />
			<div v-if="loading && !error" class="w-48 h-48 flex items-center justify-center">
				<Icon icon="uiw:loading" class="w-8 h-8 animate-spin" />
			</div>
			<div v-if="error" class="w-48 h-48 flex items-center justify-center">
				<Icon icon="material-symbols:error-outline-rounded" class="w-8 h-8" />
			</div>
			<div class="absolute bottom-0 right-0 text-red cursor-pointer">
				<Icon v-if="isFavorite" icon="mdi:cards-heart" class="w-7 h-7" @Click="$emit('remove-favorite', data)" />
				<Icon v-else icon="mdi:cards-heart-outline" class="w-7 h-7" @Click="$emit('add-favorite', data)" />
			</div>
		</div>
		<div class="line-clamp line-clamp-1">{{ data.name }}</div>
	</div>
</template>

<script lang="ts" setup>
import { TypeDummyData } from '~/vue-query/dummydata';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineEmits(['add-favorite', 'remove-favorite']);
defineProps<{ data: TypeDummyData; isFavorite: boolean }>();

// image loading event
const loading = ref(true);
const error = ref(false);

function hideLoading() {
	loading.value = false;
}

function handleError() {
	error.value = true;
}
</script>
