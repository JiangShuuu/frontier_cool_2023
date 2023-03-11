<template>
	<div v-if="result" class="grid grid-cols-5 pt-5 justify-items-center">
		<div v-for="item in result[page]" :key="item.id">
			<Card :data="item" />
		</div>
	</div>
</template>
<script setup lang="ts">
import Card from './Card.vue';
import { TypeDummyData } from '~/vue-query/dummydata';
import { chunk } from 'lodash-es';

const props = defineProps<{ data: TypeDummyData[] }>();

const sort = 10;
const page = 1;

function paginateData(data: TypeDummyData[], pageSize: number): { [page: number]: any }[] {
	const chunkedData = chunk(data, pageSize);
	return chunkedData;
}

const result = paginateData(props.data, sort);

console.log('aa', result[0]);
</script>
