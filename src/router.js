import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Login from "@/components/Login";
import NotFound from "@/components/NotFound";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Azortis - Home',
                navBar: true,
                footer: true
            }
        },
        {
            path: '/login',
            name: "Login",
            component: Login,
            meta: {
                title: 'Azortis - Login',
                navBar: false,
                footer: true
            }
        },
        {
            path: '*',
            name: "Not Found",
            component: NotFound,
            meta: {
                title: 'Azortis - Not Found',
                navBar: false,
                footer: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router;