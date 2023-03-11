import Home from '../src/views/Home.vue'
import About from '../src/views/About.vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router