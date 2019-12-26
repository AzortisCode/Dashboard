import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import About from "@/components/About";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Azortis - Home',
                navBar: true
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: 'Azortis - About',
                navBar: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router;