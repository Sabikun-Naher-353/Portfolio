import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './components/MainPage.vue'
import Computer from './components/Computer.vue'
import Language from './components/Language.vue'
import Activity from './components/Activity.vue'


const routes = [
  { path: '/', component: MainPage },
  { path: '/computer', component: Computer },
  { path: '/language', component: Language },
  { path: '/activity', component: Activity },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
