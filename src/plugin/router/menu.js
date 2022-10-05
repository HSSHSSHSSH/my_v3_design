const menu = [
    {    
       path: '/',
       name: 'main',
       component: () => import("../../view/main.vue"),
       children: [
        {
            path: '/button',
            name: 'button',
            component: () => import('../../../lib/components/button/doc.md')
        },
        {
            path: '/input',
            name: 'input',
            component: () => import('../../../lib/components/input/doc.md')
        },
        {
            path: '/space',
            name: 'space',
            component: () => import('../../../lib/components/space/doc.md')
        }
       ]
    },
]

export default menu