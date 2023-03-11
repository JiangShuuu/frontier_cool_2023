<template>
	<div class="px-10 py-5">
		<router-view />
	</div>
</template>

<script setup lang="ts">
// LocalStorageInit
if (!localStorage.getItem('selectSort')) {
	localStorage.setItem('selectSort', '30');
}
</script>
