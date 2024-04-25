import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

import Login from '../pages/login/index'
import Students from '../pages/students/index'
import Home from '../pages/home/index'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresGuest)) {

    if (!store.getters.isAuthenticated) {

      next();

    } else {

      next({ name: 'Home' });

    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {

    if (store.getters.isAuthenticated) {

      next();

    } else {

      next({ name: 'Login' });
    }

  } else {

    next();
    
  }
});


export default router;
