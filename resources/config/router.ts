import routes from '@/routes';
import { createRouter, createWebHistory } from 'vue-router';

const appUrl = new URL(document.baseURI);

const router = createRouter({
    history: createWebHistory(appUrl.pathname),
    scrollBehavior: () => ({ top: 0, left: 0 }),
    routes
});

export default router;
