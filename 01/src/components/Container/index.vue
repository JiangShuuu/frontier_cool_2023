<template>
	<div v-if="dummyResult" class="grid grid-cols-5 pt-5 justify-items-center">
		<div v-for="item in dummyResult[currentPage - 1]" :key="item.id">
			<Card :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { TypeDummyData } from '~/vue-query/dummydata';
import { chunk } from 'lodash-es';
import { defineProps, defineEmits, watch, ref } from 'vue';

const props = defineProps<{ currentPage: number; data: TypeDummyData[]; selectSort: string }>();

const dummyResult = ref();

const emit = defineEmits(['get-total-page']);

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
</script>
