<template lang="pug">
div.px-10.py-5 
	router-view
</template>

<script setup lang="ts">
// LocalStorage Init
if (!localStorage.getItem('selectSort')) {
	localStorage.setItem('selectSort', '30');
}
if (!localStorage.getItem('favoriteSelectSort')) {
	localStorage.setItem('favoriteSelectSort', '30');
}
</script>
