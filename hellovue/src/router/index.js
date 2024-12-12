import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/opt',
            name: 'optional',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/optionaltest.vue')
        },
        // {
        //     path: '/user/:name',
        //     name: 'User',
        //     //@默认是src根目录
        //     component: () => import('@/components/user/UserInfo.vue'),
        //     children: [
        //         {
        //             path: 'profile',
        //             component: () => import('@/views/user/Profile.vue')
        //         },
        //         {
        //             path: 'posts',
        //             component: () => import('@/views/user/Posts.vue')
        //         }
        //     ]
        // }
    ]
})



export default router