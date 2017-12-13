import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/page/nav/nav'
import App from '@/App'
import blogContainer from '@/page/main/blog/blogContainer'
import hl from '@/components/HelloWorld'
import content from '@/page/main/blog/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
      	{
      		path:'/blog',
      		component:blogContainer
      	},{
          path:'/blog/001',
          component:content
        }
      ]
    }
  ]
})
