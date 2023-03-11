<template lang="pug">
Header(:render-modal="renderModal", :selected-value="selectSort", @set-render-modal="setRenderModal", @update:selected-value="selectSort = $event")

Container(v-if="data", :render-modal="renderModal", :data="data", :current-page="currentPage", :select-sort="selectSort", @get-total-page="getTotalPage")

Pagination(:total="totalPage", :current-page="currentPage", @set-current-page="setCurrentPage")

Modal(:modal-is-open="modalIsOpen", :modal-data="modalData", @modal-change="modal.handleClick")
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Container from '~/components/Container/index.vue';
import Pagination from '~/components/Pagination.vue';
import Modal from '~/components/Modal.vue';
import { ref, watch, provide } from 'vue';
// wip 使用 pug 模板無法直接引入 type
// import { TypeDummyData } from '~/vue-query/dummydata';
// import { Toggle } from '~/Type';

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
const modal = {
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
const renderModal = ref(localStorage.getItem('favoriteRenderModal') || 'card');
const setRenderModal = (n: string) => {
	renderModal.value = n;
	localStorage.setItem('favoriteRenderModal', n);
};
</script>
