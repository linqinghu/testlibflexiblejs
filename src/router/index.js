import Vue from 'vue'
import Router from 'vue-router'
import Login from 'src/components/login'
import Favorites from 'src/components/favorites';
import Profile from 'src/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})
