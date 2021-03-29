import Vue from 'vue'
import VueRouter from 'vue-router'
import CursoBuscado from '../views/CursoBuscado.vue'
import Home from '../views/Home.vue'
import Inscripcion from '../views/Inscripcion.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cursobuscado/:nombrecurso',
    name: 'CursoBuscado',
    component: CursoBuscado
  },
  {
    path: '/inscripcion/:nombrecurso',
    name: 'Inscripcion',
    component: Inscripcion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
