import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

// Router options
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import WelcomeView from './pages/Welcome.vue'
import RoomsView from './pages/Rooms.vue'
import ServicesView from './pages/Services.vue'
import InfoView from './pages/Info.vue'
import RequestQuote from './pages/RequestQuote.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/welcome', component: WelcomeView, name: 'welcome' },
  { path: '/rooms', component: RoomsView, name: 'rooms' },
  { path: '/services', component: ServicesView, name: 'services' },
  { path: '/info', component: InfoView, name: 'info' },
  { path: '/request-quote', component: RequestQuote, name: 'request-quote'}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;


createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
