import { createWebHistory, createRouter } from "vue-router";

function loadView(view) {
    return () => import(`../pages/${view}.vue`);
}

const myRoutes = [
    {
        path: '/',
        name: 'Index',
        component: loadView('home/list'),
        meta: {
            auth: false,
        }
    },
    {
        path: '/update',
        name: 'Update',
        component: loadView('home/update'),
        meta: {
            auth: false,
        }
    },
    {
        path: '/create',
        name: 'Create',
        component: loadView('home/create'),
        meta: {
            auth: false,
        }
    },
    {
        path: '/detail',
        name: 'Detail',
        component: loadView('home/detail'),
        meta: {
            auth: false,
        }
    }
];
const router = createRouter({
    hashbang: false,
    history: createWebHistory(),
    routes: myRoutes,
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
});

export default router;