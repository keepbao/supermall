import Vue from 'vue';
import VueRouter from 'vue-router';


//1、安装插件
Vue.use(VueRouter);

//解决重复点击导航栏浏览器控制台报错：Avoided redundant navigation to current location
//vue-router在3.0版本以上重复点菜单/导航栏报错
//修改push没有作用
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

//修改路由replace方法，阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

//懒加载的方式加载组件
const Home = ()=> import ('views/home/home');
const Cart =() => import('views/cart/cart');
const Category = () => import('views/category/category');
const Profile = () => import('views/profile/profile');
const Login = () => import('views/login/login')
const Detail = () => import('views/detail/Detail');


//2、创建router
const routes = [
  {path:'',redirect:"/home"},
  {path:'/home',component:Home},
  {path:'/cart',component:Cart},
  {path:'/category',component:Category},
  {path:'/profile',component:Profile},
  {path:'/login',component:Login},
  {path:'/detail/:iid',component:Detail}

]

const router = new VueRouter({
    routes,
    mode: 'history'
})



export default router;