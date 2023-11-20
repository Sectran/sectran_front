import { createRouter, createWebHashHistory } from 'vue-router';
import outsideLayout from './outsideLayout';
import layoutRouter from "./layout/index"
const routes = [
  ...layoutRouter,
  ...outsideLayout
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
