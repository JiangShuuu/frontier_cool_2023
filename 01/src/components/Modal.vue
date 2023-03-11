<template>
	<div
		:class="[
			'fixed top-0 left-0',
			'w-screen h-screen',
			'p-5',
			'flex justify-center items-center',
			modalIsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
			'transition-all duration-300',
		]"
	>
		<!-- Modal-Overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50" @click="$emit('modal-change', false)" />

		<!-- Modal-Window -->
		<div :class="['w-full max-w-sm bg-white rounded-md overflow-hidden z-10', modalIsOpen ? 'scale-100' : 'scale-0', 'transition-all duration-300']">
			<div class="border-b-2 p-3 flex justify-between items-center">
				<div class="font-bold text-gray-700">
					<p>123</p>
				</div>
				<div class="h-7 w-7 p-1 hover:bg-gray-200 active:scale-90 rounded-md cursor-pointer transition-all" @click="$emit('modal-change', false)">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>

			<div>
				<slot name="itemContent">
					<div class="p-3">
						<slot name="itemText"> 這是 Modal 視窗 </slot>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineEmits(['modal-change']);
defineProps<{ modalIsOpen: boolean }>();
</script>
