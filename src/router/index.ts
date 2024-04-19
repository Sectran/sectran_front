import { createRouter, createWebHashHistory } from 'vue-router';
// import outsideLayout from './outsideLayout';
// import layoutRouter from "./layout/index"
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ 'views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },




  // ...outsideLayout,
  // ...layoutRouter
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
