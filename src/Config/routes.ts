import Login from './../Pages/Login/index';
import Register from './../Pages/Register/index';
import Document from './../Pages/Documents/index';

const routes = [
    {
        path: '/login',
        component: Login
    }, 
    {
        path: '/register',
        component: Register
    },
    {
        path: '/documents',
        component: Document
    }
]

export default routes