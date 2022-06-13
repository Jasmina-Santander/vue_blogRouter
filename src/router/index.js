import { createRouter, createWebHistory } from 'vue-router'
import PortadaView from '../views/PortadaView.vue'

const routes = [
  {
    path: '/',
    name: 'portada',
    component: PortadaView
  },
  {
    path: '/sobremi',
    name: 'sobremi',
    component: () => import(/* webpackChunkName: "sobremi" */ '../views/SobreMiView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
  },
  {
    path: '/post',
    name: 'ultimopost',
    component: () => import(/* webpackChunkName: "post" */ '../views/UltimoPostView.vue'),
          children: [
            {
              path: ":id",
              name: "routerID",
              component: () => import(/* webpackChunkName: "post" */ '../components/MisPost.vue')
            }, 
          ],
  },
  { path: '/:pathMatch(.*)*',
  name: 'pagenotfound',
  component: () => import(/* webpackChunkName: "post" */ '../views/RutasInexistenteView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
