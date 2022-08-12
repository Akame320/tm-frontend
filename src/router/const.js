import Home from "@/views/Home";
import About from "@/views/About";
import Auth from "@/views/auth/Index";
import Registration from "@/views/auth/Registration";
import Login from "@/views/auth/Login";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    },
    {
        path: '/auth/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login
    }
]

export default routes