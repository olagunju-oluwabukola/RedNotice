import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   ccomponent: () => import('../Views/HomeView.vue'),
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../Views/AboutUs.vue'),
    // },
  ],
});

export default router;
