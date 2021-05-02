import Vue from 'vue'
import VueRouter from 'vue-router'
import CursoBuscado from '../views/CursoBuscado.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Pago from '../views/FrmPago.vue'
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
  ,
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/pago',
    name: 'Pago',
    component: Pago
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
