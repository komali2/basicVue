import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Information from '@/components/Information';
import Cats from '@/components/Cats';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Cats,
    },
  ],
});
