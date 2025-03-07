import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/Users.vue')
      },
      {
        path: 'stores',
        name: 'Stores',
        component: () => import('../views/Stores.vue')
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('../views/Members.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('../views/Inventory.vue')
      },
      {
        path: 'delivery-tracking',
        name: 'DeliveryTracking',
        component: () => import('../views/DeliveryTracking.vue')
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('../views/Notifications.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 