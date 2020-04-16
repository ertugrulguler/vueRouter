import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Header from './components/Header.vue';


export const routes = [
    // {path:'/',component: Home, name:'anasayfa'},
    {path:'/', name:'anasayfa',
    components:
    {
        default:Home,
        "header-top":Header
    }},
    {
        // path:'/user',component: User,
        path:'/user',components:{
            default:User,
            "header-bottom":Header
        },
        children:[
            {path:'',component:UserStart},
            {path:':id',component:UserDetail},
            {path:':id/edit',component:UserEdit,name:'userEdit'}
        ] 
    },
    // {path:'/user/:id',component: User },
    // {path:'/userDetail',component: UserDetail },
    // {path:'/userEdit',component: UserEdit },
    // {path:'/userStart',component: UserStart },
    {path:'/redirect', redirect:'/User' }, // eğer redirect diye bir route gelirse user'a yönlendir.
    {path:'*',redirect:'/'} // yukarıdakilere uymayan herhangi bir şey gelirse anasayfaya yönlendir.
]