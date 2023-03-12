<template lang="pug">
section(class="flex items-center justify-between")
	div.space-x-2.underline.underline-offset-4
		router-link(:to="'/'", :class="[$route.path === '/' ? 'text-purple' : 'nagtive-style']") ALL
		router-link(:to="'/favorite'", :class="[$route.path === '/favorite' ? 'text-purple' : 'nagtive-style']") Favorite
	div.flex.items-center.space-x-2
		select#sort(:value="selectedValue", name="sort", class="border-2 text-xs p-1 cursor-pointer", @change="onChange")
			option(value="10") 10
			option(value="30") 30
			option(value="50") 50
		Icon(:icon="'ic:outline-grid-view'", :class="[renderModal === 'card' ? 'text-purple' : 'nagtive-style']", class="w-6 h-6 cursor-pointer", @Click="modalChange('card')")
		Icon(:icon="'material-symbols:view-list-sharp'", :class="[renderModal === 'list' ? 'text-purple' : 'nagtive-style']", class="w-6 h-6 cursor-pointer", @click="modalChange('list')")
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';

interface MyChangeEvent {
	target: HTMLSelectElement;
	value: string;
}

defineProps<{ selectedValue: string; renderModal: string }>();
const emit = defineEmits(['update:selected-value', 'set-render-modal']);
const routerPath = useRoute().fullPath;

function onChange(event: MyChangeEvent) {
	emit('update:selected-value', event.target.value);
	const pathCurrentPage = routerPath === '/' ? 'currentPage' : 'favoriteCurrentPage';
	const pathSelectSort = routerPath === '/' ? 'selectSort' : 'favoriteSelectSort';
	localStorage.removeItem(pathCurrentPage);
	localStorage.setItem(pathSelectSort, event.target.value);
}

function modalChange(n: string) {
	emit('set-render-modal', n);
}
</script>

<style lang="postcss" scoped>
.nagtive-style {
	@apply text-purple-light hover:text-purple transition duration-300 ease-in-out;
}
</style>
