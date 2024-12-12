import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Booking from '@/views/Booking.vue';
import Confirmation from '@/views/Confirmation.vue';
import Login from '@/views/Login.vue';
import Reservations from '@/views/Reservations.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Utilise le mode 'history' pour des URLs propres
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation,
    },
    {
      path: '/reservations',
      name: 'Reservations',
      component: Reservations,
      // Ajouter une protection pour les utilisateurs non authentifiés
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('isAuthenticated') === 'true') {
          next();
        } else {
          next('/login');
        }
      },
    },
  ],
});
