<template>
	<Header :selected-value="selectSort" @update:selected-value="selectSort = $event" />
	<Container v-if="data" :data="data" :current-page="currentPage" :select-sort="selectSort" @get-total-page="getTotalPage" />
	<Pagination :total="totalPage" :current-page="currentPage" @set-current-page="setCurrentPage" />
	<Modal :modal-is-open="modalIsOpen" :modal-data="modalData" @modal-change="modal.handleClick" />
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import Modal from '~/components/Modal.vue';
import { ref, watch, provide } from 'vue';
import { Toggle } from '~/Type';
import { TypeDummyData } from '~/vue-query/dummydata';

const favoriteMemberStr = localStorage.getItem('favoriteMember');
const data = favoriteMemberStr ? ref(JSON.parse(favoriteMemberStr)) : ref([]);

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
// Modal
const modalIsOpen = ref(false);
const modalData = ref();
const modal: Toggle = {
	handleClick: (value: TypeDummyData) => {
		if (value) {
			modalData.value = value;
			modalIsOpen.value = true;
			return;
		}
		modalData.value = '';
		modalIsOpen.value = false;
	},
};
provide('modalToggle', modal);
</script>
