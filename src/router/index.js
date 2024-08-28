// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: AboutView
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import AccessDenied from '../views/AccessDenied.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    // Restrict access to authenticated users
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated) {
        next();
      } else {
        next('/access-denied');  // Redirect to access denied if not authenticated
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDenied
  }
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
