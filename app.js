import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './src/home/index.vue'
Vue.use(VueRouter);

const routes = [{
    path:'/',
    component: Home,
    children:[{
        path:'123',
        component: {
            template:`<div>123page</div>`
        }
    }]
}]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default ()=>{
    const app = new Vue({
        router,
        template: `<div>访问的 URL 是：
        <router-link to="/123">123</router-link>
        <router-view></router-view>
        </div>`
    });
    return {app,router}
}
