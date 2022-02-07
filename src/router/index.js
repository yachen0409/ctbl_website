import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Announcement from '../views/Announcement.vue'
import Schedule from '../views/Schedule.vue'
import Score from '../views/Score.vue'
import Data from '../views/Data.vue'
import Info from '../views/Info.vue'
import Teams from '../views/Teams.vue'
import About from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: Announcement
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
