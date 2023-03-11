<template>
	<Header :selected-value="selectSort" @update:selected-value="selectSort = $event" />
	<Container v-if="!isLoading && data" :data="data" :select-sort="selectSort" />
	<Pagination />
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import { useGetData } from '~/vue-query/dummydata';
import { provide, ref } from 'vue';

const { isLoading, data, isError } = useGetData();

// selectSort
const selectSort = ref('30');
// sortProvide
provide('page', 213);

// console.log('data', data.value);
</script>
