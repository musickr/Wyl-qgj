import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie";
import Game from '@/components/Game'
import AfficialAccount from '@/components/AfficialAccount'
import Test from '@/components/Test'

Vue.use(Router)
const router =new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game,
      meta:{pass: false},
    },
    {
      path: '/AfficialAccount',
      name: 'AfficialAccount',
      component: AfficialAccount,
      meta:{pass: true},
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test,
      meta:{pass: false},
    }
  ]
})



// 全局路由守卫
router.beforeEach((to, from, next) => {
  //bu检验权限的路由直接跳过
  if(to.meta.pass)
  {
    next();
  }
  else{
    //需要检验权限的页面进入公众号登陆页
    //console.log(Cookies.get('markToken'));return
    if(Cookies.get('markToken')){
      //console.log(Cookies.get('markToken'))
      next()
    }else{
      next({path:'/AfficialAccount'})
    }
  }
});

export default router