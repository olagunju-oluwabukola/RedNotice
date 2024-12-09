import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import signup from '../components/Signup.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
 {
  path:'/sign-up',
  name: 'sign-up',
  component: signup
 },
 {
  path:'/Dashboard',
  name: 'Dashboard',
  component: WhyChooseUs
 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});






export default router;
