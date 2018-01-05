import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/modules/mainView'
import Mes from '@/modules/mes'
import AddressList from '@/modules/addressList'
import DeskView from '@/modules/desk/deskView'
import Desk from '@/modules/desk'
import Me from '@/modules/me'

// desk menu start --- (需要再抽出模块对应的路由模块，这里先统一处理)
import Announce from '@/modules/desk/announce'
import MateBar from '@/modules/desk/matebar'
import PublicTel from '@/modules/desk/publictel'
import Mail from '@/modules/desk/mail'
import Daily from '@/modules/desk/daily'
import Verify from '@/modules/desk/verify'
import Assist from '@/modules/desk/assist'
// desk menu end ---

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
      children: [
        {
          path: 'mes',
          component: Mes
        },
        {
          path: 'addresslist',
          component: AddressList
        },
        {
          path: 'desk',
          component: DeskView,
          children: [
            {
              path: '/',
              component: Desk
            },
            {
              path: 'matebar',
              component: MateBar
            },
            {
              path: 'publictel',
              component: PublicTel
            },
            {
              path: 'mail',
              component: Mail
            },
            {
              path: 'announce',
              component: Announce
            },
            {
              path: 'daily',
              component: Daily
            },
            {
              path: 'verify',
              component: Verify
            },
            {
              path: 'assist',
              component: Assist
            },
          ]
        },
        {
          path: 'me',
          component: Me
        },
      ]
    }
  ]
})
