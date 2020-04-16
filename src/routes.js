import Home from './components/Home.vue';
import Header from './components/Header.vue';


const User = resolve => {
    require.ensure(["./components/user/User.vue"],()=>{
        resolve(requri("./components/user/User.vue"));
    });
}

const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"],()=>{
        resolve(requri("./components/user/UserStart.vue"));
    });
}
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"],()=>{
        resolve(requri("./components/user/UserDetail.vue"));
    });
}
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"],()=>{
        resolve(requri("./components/user/UserEdit.vue"));
    });
} //isternirse üçüncü bir parametre ile gruplama yapılabilir. yani usera tıklandığında tüm userlar tek seferde yüklensin denebilir.
// import User from './components/user/User.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
// import UserStart from './components/user/UserStart.vue';


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