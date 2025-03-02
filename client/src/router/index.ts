import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import MapPage from '@/views/MapPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    }, 
    {
        path: '/map/:id',
        name: 'Map',
        component: MapPage
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router;