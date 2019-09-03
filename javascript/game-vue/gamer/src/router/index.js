import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie";
import Game from '@/components/Game'
import AfficialAccount from '@/components/AfficialAccount'
import Test from '@/components/Test'


const getQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) 
  return unescape(r[2]); 
  return null;
} 

Vue.use(Router)
const router =new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game,
      meta:{pass: true},
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
  if(to.meta.pass)
  {
    next();
  }
  else{
    //console.log(Cookies.get('markToken'));return
    if(Cookies.get('markToken')){
      console.log(Cookies.get('markToken'))
      next()
    }else{
      next({path:'/AfficialAccount'})
    }
  }
});

export default router