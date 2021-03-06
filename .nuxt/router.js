import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b1805f3a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f0829544 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _b1805f3a,
    name: "index"
  }, {
    path: "/:slug",
    component: _f0829544,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
