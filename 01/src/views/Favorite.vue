<template lang="pug">
Head
	title 我的最愛 - Frontier_前端測驗01
	meta(key="description" name="description" content="Frontier_前端測驗_2023")
	meta(key="og:title" property="og:title" content="我的最愛 - Frontier_前端測驗01")
	meta(key="og:description" name="og:description" content="Frontier_前端測驗_2023")
	meta(key="og:site_name" property="og:site_name" content="Frontier_前端測驗_2023")
Header(:render-modal="renderModal", :selected-value="selectSort", @set-render-modal="setRenderModal", @update:selected-value="selectSort = $event")
Container(v-if="data", :render-modal="renderModal", :data="data", :current-page="currentPage", :select-sort="selectSort", @get-total-page="getTotalPage")
Pagination(:total="totalPage", :current-page="currentPage", @set-current-page="setCurrentPage")
Modal(:modal-is-open="modalIsOpen", :modal-data="modalData", @modal-change="modal.handleClick")
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head';
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import Modal from '~/components/Modal.vue';
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

const favoriteMemberStr = localStorage.getItem('favoriteMember');
const data = favoriteMemberStr ? ref(JSON.parse(favoriteMemberStr)) : ref([]);

// SelectSort
const selectSort = ref(localStorage.getItem('favoriteSelectSort') || '30');

// TotalPage
const totalPage = ref(0);
const getTotalPage = (n: number) => {
	totalPage.value = n;
};

// CurrentPage
const currentPage = ref(Number(localStorage.getItem('favoriteCurrentPage')) || 1);
const setCurrentPage = (n: number) => {
	currentPage.value = n;
	localStorage.setItem('favoriteCurrentPage', n.toString());
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
const renderModal = ref(localStorage.getItem('favoriteRenderModal') || 'card');
const setRenderModal = (n: string) => {
	renderModal.value = n;
	localStorage.setItem('favoriteRenderModal', n);
};
</script>
