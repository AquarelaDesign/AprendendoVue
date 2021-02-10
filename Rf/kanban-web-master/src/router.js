// ./src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import Board from './views/Board.vue'
import New from './views/New.vue'
import Home from './views/Home.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/board',
      component: Board
    },
    {
      path: '/new',
      component: New
    }
  ]
})

const dirLog = {
  '': '？',
  back: '⏪',
  forward: '⏩'
}

routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`)
})
