import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path: '/home',
        component:()=>import('./components/Home.vue')
    },
    {
        path: '/movies/:id',
        name: 'MovieDetailsPage',
        component:()=>import('@/components/MovieDetailsPage.vue')
    },
    {
        path: '/movies',
        component:()=>import("./components/MoviesPage.vue")
    },
    {
        path: '/movies/:id/cast',
        name: 'Cast',
        component:()=>import('@/components/Cast.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router


