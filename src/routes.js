import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';



export const routes = [
    {path:'',component: Home, name:'anasayfa'},
    {path:'/user',component: User },
    {path:'/userDetail',component: UserDetail },
    {path:'/userEdit',component: UserEdit },
    {path:'/userStart',component: UserStart },
]