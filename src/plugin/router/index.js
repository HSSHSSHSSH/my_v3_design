import { createRouter, createWebHistory } from 'vue-router'
const Main = ()=> import('../../view/main.vue')
const Test = ()=> import('../../view/test.vue')
const routes = [  
    {    
        path: '/',    name: 'main',    component: Main ,
        children: [
            {    path: '/test',    name: 'test',    component: Test  }, 

        ]
    }, 
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router
