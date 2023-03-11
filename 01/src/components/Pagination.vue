<template>
	<section class="mt-10 flex items-center justify-center space-x-2">
		<!-- prev -->
		<button class="btn" :disabled="currentPage <= 1" @click="currentPage -= 1">
			<p>&lt</p>
		</button>

		<!-- PageCount < 6 -->
		<template v-if="total <= 6">
			<div v-for="(item, idx) in total" :key="idx">
				<div
					:class="[currentPage === item ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = item"
				>
					{{ item }}
				</div>
			</div>
		</template>

		<!-- PageCount > 6 -->
		<div v-else class="flex space-x-2">
			<template v-if="currentPage < 3">
				<div
					:class="[currentPage === 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = 1"
				>
					1
				</div>
				<div
					:class="[currentPage === 2 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = 2"
				>
					2
				</div>
				<div
					:class="[currentPage === 3 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = 3"
				>
					3
				</div>
				<p>...</p>
				<div
					:class="[currentPage === total ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = total"
				>
					{{ total }}
				</div>
			</template>
			<template v-if="currentPage > 2 && currentPage < total - 2">
				<div
					:class="[currentPage === 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = 1"
				>
					1
				</div>
				<p>...</p>
				<div
					:class="[currentPage === currentPage - 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = currentPage - 1"
				>
					{{ currentPage - 1 }}
				</div>
				<div
					:class="[currentPage === currentPage ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = currentPage"
				>
					{{ currentPage }}
				</div>
				<div
					:class="[currentPage === currentPage + 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = currentPage + 1"
				>
					{{ currentPage + 1 }}
				</div>
				<p>...</p>
				<div
					:class="[currentPage === total ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = total"
				>
					{{ total }}
				</div>
			</template>
			<template v-if="currentPage >= total - 2">
				<div
					:class="[currentPage === 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = 1"
				>
					1
				</div>
				<p>...</p>
				<div
					:class="[currentPage === total - 2 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = total - 2"
				>
					{{ total - 2 }}
				</div>
				<div
					:class="[currentPage === total - 1 ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = total - 1"
				>
					{{ total - 1 }}
				</div>
				<div
					:class="[currentPage === total ? 'bg-blue' : 'bg-gray']"
					class="border w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
					@click="currentPage = total"
				>
					{{ total }}
				</div>
			</template>
		</div>

		<!-- next -->
		<button class="btn" :disabled="currentPage >= total" @click="currentPage += 1">
			<p>&gt</p>
		</button>
	</section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const total = ref(7);
const currentPage = ref(1);
</script>

<style lang="postcss">
.btn {
	@apply bg-gray w-6 h-6 flex items-center justify-center cursor-pointer disabled:bg-gray/20 disabled:text-black/20;
}
</style>
