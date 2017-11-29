import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/home/HomeView.vue'
import MeView from '../components/me/MeView.vue'
import XinxiView from '../components/me/geren.vue'
import zixunView from '../components/zixun/zixun.vue'
import guanzhuView from '../components/me/guanzhu.vue'
import jinyaoView from '../components/me/jinyao.vue'
import tuijianView from '../components/me/tuijian.vue'
import saoyaoView from '../components/goumai/saoyao.vue'
import wenbenView from '../components/goumai/wenben.vue'
import chenggongView from '../components/goumai/chenggong.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/wode',
      component: MeView
    },
    {
      path: '/xinxi',
      component: XinxiView
    },
    {
      path: '/zixun',
      component: zixunView
    },
    {
      path: '/guanzhu',
      component: guanzhuView
    },
    {
      path: '/jinyao',
      component: jinyaoView
    },
    {
      path: '/tuijian',
      component: tuijianView
    } ,
    {
      path: '/saoyao',
      component: saoyaoView
    },
    {
      path: '/wenben',
      component: wenbenView
    }
    ,
    {
      path: '/chenggong',
      component: chenggongView
    }
  ]
})
