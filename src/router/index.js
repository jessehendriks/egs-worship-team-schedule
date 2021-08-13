import { createRouter, createWebHistory } from 'vue-router'

const Overview = () => import(/* webpackChunckName: "overview" */ '../views/Overview');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Overview,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
