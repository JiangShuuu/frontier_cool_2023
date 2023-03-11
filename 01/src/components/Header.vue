<template>
	<section class="flex items-center justify-between">
		<div class="space-x-2 underline underline-offset-4">
			<router-link to="/" :class="[$route.path === '/' ? 'text-purple' : 'nagtive-style']">ALL</router-link>
			<router-link to="/favorite" :class="[$route.path === '/favorite' ? 'text-purple' : 'nagtive-style']">Favorite</router-link>
		</div>
		<div class="flex items-center space-x-2">
			<select id="sort" :value="selectedValue" name="sort" class="border-2 text-xs p-1 cursor-pointer" @change="onChange">
				<option value="10">10</option>
				<option value="30">30</option>
				<option value="50">50</option>
			</select>
			<Icon
				icon="ic:outline-grid-view"
				:class="[renderModal === 'card' ? 'text-purple' : 'nagtive-style']"
				class="w-6 h-6 cursor-pointer"
				@Click="modalChange('card')"
			/>
			<Icon
				icon="material-symbols:view-list-sharp"
				:class="[renderModal === 'list' ? 'text-purple' : 'nagtive-style']"
				class="w-6 h-6 cursor-pointer"
				@click="modalChange('list')"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

// wip
defineProps<{ selectedValue: any; renderModal: string }>();

const emit = defineEmits(['update:selected-value', 'set-render-modal']);

// wip
function onChange(event: any) {
	emit('update:selected-value', event.target.value);
	localStorage.removeItem('currentPage');
	localStorage.setItem('selectSort', event.target.value);
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
