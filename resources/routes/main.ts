import { type RouteRecordRaw } from 'vue-router';

const pagesMain: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: async () => await import('@/pages/HomePage.vue')
    }
];

export default pagesMain;
