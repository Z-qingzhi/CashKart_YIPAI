
import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import AboutAs from './views/AboutAs.vue'
import Contract from './views/Contract.vue'
import Privacy from './views/Privacy.vue'
import Registration from './views/Registration.vue'
import Terms from './views/Terms.vue'
import Register from './views/Register.vue'
import AndroidStore from './views/AndroidStore.vue'
import HowLoan from './views/HowLoan.vue'
import Tab from './views/Tab.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Goods from './views/Goods.vue'




let routes = [
    {
        path: '/404',
        component: NotFound,
        // children: [
        //     { path: '/4042', component: NotFound2, name: 'Table', hidden: false },
        // ]
    },
    {
        path: '/',
        component: Home,
    },
    // {
    //     path: '/Home',
    //     component: Home,
    //     name:'home',
    //     children: [
    //         { path: '/Home/Faq',
    //           component: Faq,
    //           name:'Home/Faq',
    //           children: [
    //                 { path: '/Home/Faq/AboutAs',
    //                   component: AboutAs,
    //                   name: 'Home/Faq',
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/Service',
    //     component: Home,
    // },
    // {
    //     path: '/HowToLoan',
    //     component: Home,
    // },
    //  {
    //     path: '/AboutAs',
    //     component: Home,
    // },
    // {
    //     path: '/Faq',
    //     component: Faq,
    // },
    // {
    //     path: '/AboutAs',
    //     component: AboutAs,
    // },
    // {
    //     path: '/Contract',
    //     component: Contract,
    // },
    // {
    //     path: '/Privacy',
    //     component: Privacy,
    // },
    // {
    //     path: '/Registration',
    //     component: Registration,
    // },
    // {
    //     path: '/Terms',
    //     component: Terms,
    // },
    // {
    //     path: '/Register',
    //     component: Register,
    // },
    // {
    //     path: '/AndroidStore',
    //     name: 'AndroidStore',
    //     component: AndroidStore,
    // },
    // {
    //     path: '/HowLoan',
    //     component: HowLoan,
    // },
    // {
    //     path: '/Tab',
    //     component: Tab,
    // },
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '/Goods',
        name:'Goods',
        component: Goods,
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];
export default routes;
