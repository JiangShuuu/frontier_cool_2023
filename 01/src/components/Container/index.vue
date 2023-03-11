<template>
	<div v-if="dummyResult" class="grid grid-cols-5 mt-5 justify-items-center h-[650px] scrollbar">
		<div v-for="item in dummyResult[currentPage - 1]" :key="item.id">
			<Card :data="item" :is-favorite="findFoverite(item)" @add-favorite="addFavorite" @remove-favorite="removeFavorite" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { TypeDummyData } from '~/vue-query/dummydata';
import { chunk } from 'lodash-es';
import { watch, ref } from 'vue';

const props = defineProps<{ currentPage: number; data: TypeDummyData[]; selectSort: string }>();
const emit = defineEmits(['get-total-page']);
const dummyResult = ref();

watch(
	() => props.selectSort,
	(val, oldVal) => {
		paginateData(props.data, Number(val));
	}
);

function paginateData(data: TypeDummyData[], pageSize: number) {
	dummyResult.value = chunk(data, pageSize);
	emit('get-total-page', dummyResult.value.length);
}

paginateData(props.data, Number(props.selectSort));

// favorite
const favoriteMemberStr = localStorage.getItem('favoriteMember');
const favorite = favoriteMemberStr ? ref(JSON.parse(favoriteMemberStr)) : ref([]);
const findFoverite = (item: TypeDummyData) => {
	return favorite.value.some((olditem: TypeDummyData) => olditem.id === item.id);
};
const addFavorite = (item: TypeDummyData) => {
	favorite.value.push(item);
	localStorage.setItem('favoriteMember', JSON.stringify(favorite.value));
};
const removeFavorite = (item: TypeDummyData) => {
	const filterFavorite = favorite.value.filter((olditem: TypeDummyData) => olditem.id !== item.id);
	favorite.value = filterFavorite;
	localStorage.setItem('favoriteMember', JSON.stringify(filterFavorite));
};
</script>
