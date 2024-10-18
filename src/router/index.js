import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LogInView from '../views/LogInView.vue'
import { isAuthenticated } from '../router/authentication'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import EditBookView from '@/views/EditBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'


const routes = [
    {
        path: '/getallbookAPI',
        name: 'GetAllBookAPI',
        component: GetAllBookAPI
    },
    {
        path: '/countbookAPI',
        name: 'CountBookAPI',
        component: CountBookAPI
    },
    {
        path: '/GetWeather',
        name: 'GetWeather',
        component: WeatherView
    },
    {
        path: '/getbookcount',
        name: 'GetBookCount',
        component: GetBookCountView
    },
    {
        path: '/addbook',
        name: 'AddBook',
        component: AddBookView
    },
    {
        path: '/editbook',
        name: 'EditBook',
        component: EditBookView
    },
    {
        path: '/Firelogin',
        name: 'FireLogin',
        component: FirebaseSigninView
    },
    {
        path: '/Fireregister',
        name: 'FireRegister',
        component: FirebaseRegisterView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/login',
        name: 'Login',
        component: LogInView
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {

//     if (to.name == 'About' && !isAuthenticated.value) {
//         console.log("not log in")
//         next({ name: 'Login' })
//     } else {
//         next();
//     }
// });


export default router