export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/PageHome.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/PageNotFound.vue'),
    },
];
