<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">대시보드</h1>
      <div class="flex gap-2">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <span>날짜 선택</span>
        </button>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <span>다운로드</span>
        </button>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex flex-col space-y-1.5">
          <h3 class="text-sm font-medium">총 주문</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">1,234</p>
            <span class="ml-2 text-sm text-green-500">+12.3%</span>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex flex-col space-y-1.5">
          <h3 class="text-sm font-medium">총 매장</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">56</p>
            <span class="ml-2 text-sm text-green-500">+5.2%</span>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex flex-col space-y-1.5">
          <h3 class="text-sm font-medium">총 회원</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">3,456</p>
            <span class="ml-2 text-sm text-green-500">+8.1%</span>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex flex-col space-y-1.5">
          <h3 class="text-sm font-medium">오늘의 매출</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">₩2,345,678</p>
            <span class="ml-2 text-sm text-green-500">+15.4%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-medium mb-4">최근 주문</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span class="text-sm font-medium">JD</span>
              </div>
              <div>
                <p class="text-sm font-medium">주문 #1234</p>
                <p class="text-sm text-muted-foreground">하삼동치킨</p>
              </div>
            </div>
            <span class="text-sm text-muted-foreground">₩25,000</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span class="text-sm font-medium">KS</span>
              </div>
              <div>
                <p class="text-sm font-medium">주문 #1235</p>
                <p class="text-sm text-muted-foreground">하삼동치킨</p>
              </div>
            </div>
            <span class="text-sm text-muted-foreground">₩30,000</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-medium mb-4">매장 현황</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span class="text-sm font-medium">HS</span>
              </div>
              <div>
                <p class="text-sm font-medium">하삼동치킨</p>
                <p class="text-sm text-muted-foreground">영업중</p>
              </div>
            </div>
            <span class="text-sm text-green-500">12 주문</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span class="text-sm font-medium">HD</span>
              </div>
              <div>
                <p class="text-sm font-medium">하삼동치킨2호점</p>
                <p class="text-sm text-muted-foreground">영업중</p>
              </div>
            </div>
            <span class="text-sm text-green-500">8 주문</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script> 