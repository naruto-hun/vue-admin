import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {path:'/login',component:Login},
  {path:'/home',component:Home},
  {path:'/',redirect:'/home'}
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
  }
  const token=sessionStorage.getItem('token')
  if(token){
    //验证token是否过期
    store.dispatch('checkAdminTokenAction',{
      token,
      callback:()=>{
        sessionStorage.clear()
        next('/login')
      }
    })
    next()
  }else{
    next('/login')
  }
})

export default router
