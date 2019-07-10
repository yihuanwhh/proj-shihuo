import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'

import Home from '../views/home/Home'
import City from '../views/city/City'
import PageSearch from '../views/pagesearch/PageSearch'

import Discount from '../views/discount/Discount'
import Discovery from '../views/discovery/Discovery'
import Equip from '../views/equip/Equip'
import More from '../views/more/More'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: '/home',
        component: Index,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/discount',
                name: 'discount',
                component: Discount
            },
            {
                path: '/discovery',
                name: 'discovery',
                component: Discovery
            },
            {
                path: '/equip',
                name: 'equip',
                component: Equip
            },
            {
                path: '/more',
                name: 'more',
                component: More
            }
        ]
    },
    {
        path: '/city',
        name: 'city',
        component: City
    },
    {
        path:'/pagesearch',
        name:'pagesearch',
        component:PageSearch
    }
]

export default new VueRouter({
    routes
})