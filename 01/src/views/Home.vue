<template lang="pug">
Head
	title 首頁 - Frontier_前端測驗01
	meta(key="description" name="description" content="Frontier_前端測驗_2023")
	meta(key="og:title" property="og:title" content="首頁 - Frontier_前端測驗01")
	meta(key="og:description" name="og:description" content="Frontier_前端測驗_2023")
	meta(key="og:site_name" property="og:site_name" content="Frontier_前端測驗_2023")
Header(:render-modal="renderModal", :selected-value="selectSort", @set-render-modal="setRenderModal", @update:selected-value="selectSort = $event")
Loading(v-if="isLoading")
Error(v-if="isError")
Container(v-if="!isLoading && data", :render-modal="renderModal", :data="data", :current-page="currentPage", :select-sort="selectSort", @get-total-page="getTotalPage")
Pagination(:total="totalPage", :current-page="currentPage", @set-current-page="setCurrentPage")
Modal(:modal-is-open="modalIsOpen", :modal-data="modalData", @modal-change="modal.handleClick")
	
</template>

<script lang="ts" setup>
import Error from '~/components/Error.vue';
import Header from '~/components/Header.vue';
import Loading from '~/components/Loading.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import Modal from '~/components/Modal.vue';
import { useGetData } from '~/vue-query/dummydata';
import { ref, watch, provide } from 'vue';
import { Head } from '@vueuse/head';
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
const modal: any = {
	handleClick: (value: any) => {
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
