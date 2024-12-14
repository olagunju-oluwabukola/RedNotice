import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import signup from '../components/Signup.vue'
import DashboardLayout from '../components/DashboardLayout.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

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
  path:'/user-dashboard',
  name: 'Dashboard',
  component:DashboardLayout
 },
 {
  path: '/forgot-password',
  name:"forgot-password",
  component: ForgotPassword
 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});






export default router;
