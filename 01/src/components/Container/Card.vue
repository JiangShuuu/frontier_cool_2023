<template lang="pug">
div.py-3.space-y-2.relative.w-48
  div.relative
    img(
      v-if="!error",
      :src="data.avatar",
      :alt="data.avatar",
      class="w-48 h-48 object-cover cursor-pointer",
      @click="handleClick(data)",
      @load="hideLoading",
      @error="handleError"
    )
    div(
      v-if="loading && !error",
      class="w-48 h-48 flex items-center justify-center"
    )
      Icon(icon="uiw:loading", class="w-8 h-8 animate-spin")
    div(v-if="error", class="w-48 h-48 flex items-center justify-center")
      Icon(icon="material-symbols:error-outline-rounded", class="w-8 h-8")
    div.absolute.bottom-0.right-0.text-red.cursor-pointer
      Icon(v-if="isFavorite", icon="mdi:cards-heart", class="w-7 h-7", @click="$emit('remove-favorite', data)")
      Icon(v-else, icon="mdi:cards-heart-outline", class="w-7 h-7", @click="$emit('add-favorite', data)")
  div.line-clamp.line-clamp-1.cursor-pointer(@click="handleClick(data)") {{ data.name }}
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref, inject } from 'vue';
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

defineEmits(['add-favorite', 'remove-favorite']);
defineProps<{ data: TypeDummyData; isFavorite: boolean }>();

// wip inject Event Type
const { handleClick }: any = inject<Toggle>('modalToggle');

const loading = ref(true);

const error = ref(false);

function hideLoading() {
	loading.value = false;
}

function handleError() {
	error.value = true;
}
</script>
