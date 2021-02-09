import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/folder/2268b834-d4f0-43b6-b199-3f0f9601ee9d'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
