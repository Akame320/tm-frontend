import Home from "@/views/Home";
import About from "@/views/About";
import Auth from "@/views/auth/Index";
import Registration from "@/views/auth/Registration";
import Login from "@/views/auth/Login";
import More from "@/views/information/More";

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
    },
    {
        path: '/information/more',
        name: 'More',
        component: More
    }
]

export default routes