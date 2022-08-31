import { createApp } from 'vue'
import App from './App2.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
//Vue.use(VueSidebarMenu)

import Installation from './components/Installation.vue'
import BasicUsage from './components/BasicUsage.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Styling from './components/Styling.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/basic-usage',
      name: 'BasicUsage',
      component: BasicUsage
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/styling',
      name: 'Styling',
      component: Styling
    },
    {
      path: '/:pathMatch(.*)',
      component: Installation
    }
  ]
})

createApp(App)
  .use(router)
  .use(VueSidebarMenu)
  .mount('#app')