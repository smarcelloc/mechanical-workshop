import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: async () => await import('@/pages/HomePage.vue')
    }
];

export default routes;
