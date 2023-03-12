<template lang="pug">
Header(:render-modal="renderModal", :selected-value="selectSort", @set-render-modal="setRenderModal", @update:selected-value="selectSort = $event")
Container(v-if="!isLoading && data", :render-modal="renderModal", :data="data", :current-page="currentPage", :select-sort="selectSort", @get-total-page="getTotalPage")
Pagination(:total="totalPage", :current-page="currentPage", @set-current-page="setCurrentPage")
Modal(:modal-is-open="modalIsOpen", :modal-data="modalData", @modal-change="modal.handleClick")
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import Modal from '~/components/Modal.vue';
import { useGetData } from '~/vue-query/dummydata';
import { ref, watch, provide } from 'vue';
// wip 使用 pug 模板無法直接引入 type
// import { TypeDummyData } from '~/vue-query/dummydata';
// import { Toggle } from '~/Type';

// 替代方案 Type
interface TypeDummyData {
	id: string;
	name: string;
	avatar: string;
	age: number;
	phone: string;
	birthday: string;
	email: string;
	gender: string;
}
interface Toggle {
	handleClick: (value: TypeDummyData) => void;
}

const { isLoading, data, isError } = useGetData();

// SelectSort
const selectSort = ref(localStorage.getItem('selectSort') || '30');

// TotalPage
const totalPage = ref(0);
const getTotalPage = (n: number) => {
	totalPage.value = n;
};

// CurrentPage
const currentPage = ref(Number(localStorage.getItem('currentPage')) || 1);
const setCurrentPage = (n: number) => {
	currentPage.value = n;
	localStorage.setItem('currentPage', n.toString());
};
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

// Card or List
const renderModal = ref(localStorage.getItem('renderModal') || 'card');
const setRenderModal = (n: string) => {
	renderModal.value = n;
	localStorage.setItem('renderModal', n);
};
</script>
