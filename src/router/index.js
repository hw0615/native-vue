import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Boxoffice from '../components/Boxoffice';
import MovieDetail from '../components/MovieDetail';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
        path: '/boxoffice',
        component: Boxoffice,
        meta: {
            title: 'Boxoffice',
        },
    },
    {
        path: '/boxoffice',
        component: Boxoffice,
        meta: {
            title: 'Boxoffice',
        },
    },

    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
