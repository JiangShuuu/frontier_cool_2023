<template lang="pug">
div(class="h-40 border flex justify-between")
	div.flex
		div.w-40.h-40.flex.items-center.justify-center
			img(
				v-if="!error",
				:src="data.avatar",
				:alt="data.avatar",
				class="w-32.h-32.object-cover.cursor-pointer",
				@click="handleClick(data)",
				@load="hideLoading",
				@error="handleError"
			)
			div(v-if="loading && !error")
				Icon(icon="uiw:loading", class="w-8.h-8.animate-spin")
			div(v-if="error")
				Icon(icon="material-symbols:error-outline-rounded", class="w-8.h-8")
		div.mt-2.flex.justify-center.flex-col
			p name: {{ data.name }}
			p gender: {{ data.gender }}
			p age: {{ data.age }}
			p birthday: {{ data.birthday }}
	div.flex.items-center.justify-center.pr-10.space-x-2
		div.more(@click="handleClick(data)") 查看更多
		button.removeFavorite(v-if="isFavorite", @click="$emit('remove-favorite', data)")
			p 移除最愛
			Icon(icon="mdi:cards-heart", class="w-5.h-5")
		div.addFavorite(v-else, @click="$emit('add-favorite', data)")
			p 加入最愛
			Icon(icon="mdi:cards-heart-outline", class="w-5.h-5")
</template>

<script lang="ts" setup>
import { TypeDummyData } from '~/vue-query/dummydata';
import { Icon } from '@iconify/vue';
import { ref, inject } from 'vue';
import { Toggle } from '~/Type';

defineEmits(['add-favorite', 'remove-favorite']);
defineProps<{ data: TypeDummyData; isFavorite: boolean }>();

// wip inject Event Type
const { handleClick }: any = inject<Toggle>('modalToggle');

const loading = ref(true);

const error = ref(false);

function hideLoading() {
	loading.value = false;
}

function handleError() {
	error.value = true;
}
</script>

<style lang="postcss" scoped>
.addFavorite {
	@apply border flex border-red rounded items-center px-2 text-red cursor-pointer hover:text-white hover:bg-red transition duration-300 ease-in-out;
}
.removeFavorite {
	@apply border flex border-red rounded items-center px-2 text-white bg-red cursor-pointer;
}
.more {
	@apply border flex border-purple rounded items-center px-2 text-purple cursor-pointer hover:text-white hover:bg-purple transition duration-300 ease-in-out;
}
</style>
