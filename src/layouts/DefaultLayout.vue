<template>
  <div class="min-h-screen bg-background">
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 items-center">
        <div class="mr-4 flex">
          <a class="mr-6 flex items-center space-x-2" href="/">
            <span class="font-bold">관리자 대시보드</span>
          </a>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              <span>프로필</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="container flex-1">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside class="col-span-1">
          <nav class="flex flex-col space-y-1">
            <router-link to="/" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              대시보드
            </router-link>
            <router-link to="/users" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              사용자 관리
            </router-link>
            <router-link to="/stores" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              매장 관리
            </router-link>
            <router-link to="/members" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              회원 관리
            </router-link>
            <router-link to="/orders" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              주문 관리
            </router-link>
            <router-link to="/products" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              제품 관리
            </router-link>
            <router-link to="/inventory" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              재고 관리
            </router-link>
            <router-link to="/delivery-tracking" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              배달 트래킹
            </router-link>
            <router-link to="/notifications" class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
              알림 관리
            </router-link>
          </nav>
        </aside>
        <main class="col-span-3 p-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script> 