export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/PageHome.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/PageNotFound.vue'),
    },
];
