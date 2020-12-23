import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/libraryServices',
    name: 'LibraryServices',
    component: () => import('../views/libraryServices/LibraryServices.vue')
  },
  {
    path: '/databases',
    name: 'Databases',
    component: () => import('../views/databases/Databases.vue')
  },
  {
    path: '/libraryBoard',
    name: 'LibraryBoard',
    component: () => import('../views/libraryBoard/LibraryBoard.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/history/History.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/friends/Friends.vue')
  },
  {
    path: '/localFacilities',
    name: 'LocalFacilities',
    component: () => import('../views/localFacilities/LocalFacilities.vue')
  },
  {
    path: '/localServices',
    name: 'LocalServices',
    component: () => import('../views/localServices/LocalServices.vue')
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import('../views/contactUs/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
