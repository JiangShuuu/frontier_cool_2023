<template>
	<Header :selected-value="selectSort" @update:selected-value="selectSort = $event" />
	<Container v-if="!isLoading && data" :data="data" :current-page="currentPage" :select-sort="selectSort" @get-total-page="getTotalPage" />
	<Pagination :total="totalPage" :current-page="currentPage" @set-current-page="setCurrentPage" />
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import { useGetData } from '~/vue-query/dummydata';
import { ref, watch } from 'vue';

const { isLoading, data, isError } = useGetData();

// SelectSort
const selectSort = ref('30');
// TotalPage
const totalPage = ref(0);
const getTotalPage = (n: number) => {
	totalPage.value = n;
};
// CurrentPage
const currentPage = ref(1);
const setCurrentPage = (n: number) => {
	currentPage.value = n;
};
// watch
watch(selectSort, (val, oldVal) => {
	currentPage.value = 1;
});
</script>
