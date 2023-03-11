<template>
	<div v-if="dummyResult" class="grid grid-cols-5 pt-5 justify-items-center">
		<div v-for="item in dummyResult[page]" :key="item.id">
			<Card :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { TypeDummyData } from '~/vue-query/dummydata';
import { chunk } from 'lodash-es';
import { defineProps, watch, ref } from 'vue';

const props = defineProps<{ data: TypeDummyData[]; selectSort: string }>();

const page = 1;

const dummyResult = ref();

watch(
	() => props.selectSort,
	(val, oldVal) => {
		paginateData(props.data, Number(val));
	}
);

function paginateData(data: TypeDummyData[], pageSize: number) {
	const chunkedData = chunk(data, pageSize);
	dummyResult.value = chunkedData;
}

paginateData(props.data, Number(props.selectSort));
</script>
