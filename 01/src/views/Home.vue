<template>
	<!-- Header -->
	<Header />
	<div class="grid grid-cols-5 gap-4 pt-5">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
</template>

<script lang="ts" setup>
import Header from '../components/Global/Header.vue';
import Card from '../components/Card.vue';
</script>
