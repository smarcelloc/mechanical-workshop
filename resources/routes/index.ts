import { type RouteRecordRaw } from 'vue-router';
import pagesMain from './main';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: async () => await import('@/layouts/main/MainLayout.vue'),
        children: pagesMain
    }
];

export default routes;
