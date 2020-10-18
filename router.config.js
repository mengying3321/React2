import Home from './pages/React/Home';
import Doc from './pages/React/Doc';
import Tuto from './pages/React/Tuto';
import Blog from './pages/React/Blog';
import Comm from './pages/React/Comm';
import Login from './pages/React/Login';
import React from 'react';

const Core = () => {
    return (
        <h1>
            Core
        </h1>
    )
}
const Guide = () => {
    return (
        <h1>
            Guide
        </h1>
    )
}
const Api = () => {
    return (
        <h1>
            Api
        </h1>
    )
}
const Hooks = () => {
    return (
        <h1>
            Hooks
        </h1>
    )
}

const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/doc',
        component:Doc,
        pri:true,
        routes:[
            {
                path: '/doc/core',
                component:Core,
            },
            {
                path: '/doc/guide',
                component:Guide,
            },
            {
                path: '/doc/api',
                component:Api,
            },
            {
                path: '/doc/hooks',
                component:Hooks,
            }
        ]
    },
    {
        path:'/tuto',
        component:Tuto,
        pri:true
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/comm',
        component:Comm
    },
    {
        path:'/login',
        component:Login
    },
]



export default routes;

