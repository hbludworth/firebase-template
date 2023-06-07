import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/send_reset_password_email',
      name: 'send_reset_password_email',
      component: () => import('../views/SendResetPasswordEmailView.vue'),
    },
    {
      path: '/reset_password',
      name: 'reset_password',
      component: () => import('../views/ResetPasswordView.vue'),
    },
  ],
});

export default router;
