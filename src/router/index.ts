import { createRouter, createWebHashHistory } from 'vue-router';
import outsideLayout from './outsideLayout';
import layout from "./layout/index"
const routes = [
  ...layout,
  ...outsideLayout
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
