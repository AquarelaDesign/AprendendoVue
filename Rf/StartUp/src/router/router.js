import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/home/HomePage'
import LoginPage from '../views/login/LoginPage'
import RegisterPage from '../views/register/RegisterPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },

    // caso contrário, redirecione para casa
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirecionar para a página de login se não 
  // estiver conectado e tentando acessar uma página restrita
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('@rf/token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})