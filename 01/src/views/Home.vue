<template>
	<Header />
	<Container v-if="!isLoading && data" :data="data" />
	<Pagination />
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import { useGetData } from '~/vue-query/dummydata';

const { isLoading, data, isError } = useGetData();

// console.log('data', data.value);
</script>
