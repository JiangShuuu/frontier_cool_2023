<template>
	<Header :selected-value="selectSort" @update:selected-value="selectSort = $event" />
	<Container v-if="!isLoading && data" :data="data" :select-sort="selectSort" @get-total-page="getTotalPage" />
	<Pagination :total="totalPage" />
	<p>{{ totalPage }}</p>
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
provide('page', 213);

// TotalPage
const totalPage = ref(0);
const getTotalPage = (n: number) => {
	totalPage.value = n;
};

// console.log('data', data.value);
</script>
