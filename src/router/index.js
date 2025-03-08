import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: to => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      return isAuthenticated ? '/dashboard' : '/login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/DefaultLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/Users.vue')
      },
      {
        path: 'stores',
        name: 'Stores',
        component: () => import('@/views/Stores.vue')
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('@/views/Members.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/Orders.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('@/views/Inventory.vue')
      },
      {
        path: 'delivery-tracking',
        name: 'DeliveryTracking',
        component: () => import('@/views/DeliveryTracking.vue')
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('@/views/Notifications.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: to => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      return isAuthenticated ? '/dashboard' : '/login'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  // 인증이 필요한 페이지에 접근하려고 할 때
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }
  // 이미 로그인한 상태에서 로그인 페이지에 접근하려고 할 때
  else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard')
  }
  // 그 외의 경우
  else {
    next()
  }
})

export default router 