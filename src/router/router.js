import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'

import Home from '../views/home/Home'
import City from '../views/city/City'
import PageSearch from '../views/pagesearch/PageSearch'
import Login from '../views/login/Login'
import Regis from '../views/login/Regis'

import All from '../views/pagesearch/All'
import Goods from '../views/pagesearch/Goods'
import Youhui from '../views/pagesearch/Youhui'
import Share from '../views/pagesearch/Share'

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
                redirect: '/more/login',
                component: More,
                children:[
                    {
                        path:'login',
                        name:'login',
                        component:Login
                    },
                    {
                        path:'regis',
                        name:'regis',
                        component:Regis
                    }
                ]
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
        redirect: '/pagesearch/youhui',
        component:PageSearch,
        children:[
            {
                path:'all',
                name:'all',
                component:All
            },
            {
                path:'goods',
                name:'goods',
                component:Goods
            },
            {
                path:'youhui',
                name:'youhui',
                component:Youhui
            },
            {
                path:'share',
                name:'share',
                component:Share
            }
        ]
    }    
]

export default new VueRouter({
    routes
})