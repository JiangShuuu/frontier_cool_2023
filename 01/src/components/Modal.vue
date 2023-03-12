<template lang="pug">
div(
  v-if="modalData",
  :class="[ modalIsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none' ]"
  class="fixed top-0 left-0 w-screen h-screen p-5 flex justify-center items-center transition-all duration-300"
)

  div(
    class="absolute top-0 left-0 w-full h-full bg-black/50",
    @click="$emit('modal-change')"
  )

  div(
    :class="[ modalIsOpen ? 'scale-100' : 'scale-0' ]"
    class="w-full max-w-sm bg-white rounded-md overflow-hidden z-10 transition-all duration-300"
  )
    div(
      class="border-b-2 p-3 flex justify-between items-center"
    )
      div(
        class="font-bold text-gray-700"
      )
        p {{ modalData.name }}

      div(
        class="h-7 w-7 p-1 hover:bg-gray-200 active:scale-90 rounded-md cursor-pointer transition-all",
        @click="$emit('modal-change')"
      )
        svg(
          xmlns="http://www.w3.org/2000/svg",
          class="h-full w-full",
          fill="none",
          viewBox="0 0 24 24",
          stroke="currentColor"
        )
          path(
            stroke-linecap="round",
            stroke-linejoin="round",
            stroke-width="2",
            d="M6 18L18 6M6 6l12 12"
          )

    div
      slot(name="itemContent")
        div(
          class="p-3 w-full space-y-4"
        )
          div(class="flex items-center justify-center")
            img(
              v-if="!error",
              :src="modalData.avatar",
              :alt="modalData.avatar",
              class="w-52 h-52 object-cover",
              @load="hideLoading",
              @error="handleError"
            )

            div(v-if="loading && !error", class="w-48 h-48 flex items-center justify-center")
              Icon(icon="uiw:loading", class="w-8 h-8 animate-spin")

            div(v-if="error", class="w-48 h-48 flex items-center justify-center")
              Icon(icon="material-symbols:error-outline-rounded", class="w-8 h-8")

          div(class="space-y-1")
            p {{ `name: ${modalData.name}` }}
            p {{ `age: ${modalData.age}` }}
            p {{ `gender: ${modalData.gender}` }}
            p {{ `birthday: ${modalData.birthday}` }}
            p {{ `phone: ${modalData.phone}` }}
            p {{ `email: ${modalData.email}` }}
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
// wip 使用 pug 模板無法直接引入 type
// import { TypeDummyData } from '~/vue-query/dummydata';

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

defineEmits(['modal-change']);
defineProps<{ modalIsOpen: boolean; modalData: TypeDummyData }>();

const loading = ref(true);

const error = ref(false);

function hideLoading() {
	loading.value = false;
}

function handleError() {
	error.value = true;
}
</script>
