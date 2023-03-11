<template>
	<div class="h-40 border flex justify-between">
		<div class="flex">
			<div class="w-40 h-40 flex items-center justify-center">
				<img
					v-if="!error"
					:src="data.avatar"
					:alt="data.avatar"
					class="w-32 h-32 object-cover cursor-pointer"
					@click="handleClick(data)"
					@load="hideLoading"
					@error="handleError"
				/>
				<div v-if="loading && !error">
					<Icon icon="uiw:loading" class="w-8 h-8 animate-spin" />
				</div>
				<div v-if="error">
					<Icon icon="material-symbols:error-outline-rounded" class="w-8 h-8" />
				</div>
			</div>
			<div class="mt-2 flex justify-center flex-col">
				<p>name: {{ data.name }}</p>
				<p>gender: {{ data.gender }}</p>
				<p>age: {{ data.age }}</p>
				<p>birthday: {{ data.birthday }}</p>
			</div>
		</div>
		<div class="flex items-center justify-center pr-10 space-x-2">
			<div class="more" @click="handleClick(data)">查看更多</div>
			<button v-if="isFavorite" class="removeFavorite" @click="$emit('remove-favorite', data)">
				<p>移除最愛</p>
				<Icon icon="mdi:cards-heart" class="w-5 h-5" />
			</button>
			<div v-else class="addFavorite" @click="$emit('add-favorite', data)">
				<p>加入最愛</p>
				<Icon icon="mdi:cards-heart-outline" class="w-5 h-5" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { TypeDummyData } from '~/vue-query/dummydata';
import { Icon } from '@iconify/vue';
import { ref, inject } from 'vue';
import { Toggle } from '~/Type';

defineEmits(['add-favorite', 'remove-favorite']);
defineProps<{ data: TypeDummyData; isFavorite: boolean }>();

const abc = () => {
	console.log('huhu');
};
// wip
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
