import Home from '../views/Home.vue';
import Favorite from '../views/Favorite.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{ path: '/', component: Home },
	{ path: '/favorite', component: Favorite },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
