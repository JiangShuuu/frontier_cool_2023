<template>
	<section class="flex items-center justify-between">
		<div class="space-x-2 underline underline-offset-4">
			<router-link to="/" :class="[$route.path === '/' ? 'text-purple-light' : 'text-purple']">ALL</router-link>
			<router-link to="/favorite" :class="[$route.path === '/' ? 'text-purple' : 'text-purple-light']">Favorite</router-link>
		</div>
		<div class="flex items-center space-x-2">
			<select id="sort" name="" class="border-2 text-xs p-1 cursor-pointer">
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
			</select>
			<Icon
				icon="ic:outline-grid-view"
				:class="[modelchange ? 'text-purple-light' : 'text-purple']"
				class="w-6 h-6 cursor-pointer"
				@Click="modelchange = false"
			/>
			<Icon
				icon="material-symbols:view-list-sharp"
				:class="[!modelchange ? 'text-purple-light' : 'text-purple']"
				class="w-6 h-6 cursor-pointer"
				@Click="modelchange = true"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const modelchange = ref(true);
</script>
