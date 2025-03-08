<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">배달 트래킹</h1>
      <div class="flex gap-2">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          필터
        </button>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          내보내기
        </button>
      </div>
    </div>
    <div class="rounded-md border">
      <table class="w-full">
        <thead>
          <tr class="border-b bg-muted/50">
            <th class="h-12 px-4 text-left align-middle font-medium">주문번호</th>
            <th class="h-12 px-4 text-left align-middle font-medium">매장</th>
            <th class="h-12 px-4 text-left align-middle font-medium">배달원</th>
            <th class="h-12 px-4 text-left align-middle font-medium">출발지</th>
            <th class="h-12 px-4 text-left align-middle font-medium">도착지</th>
            <th class="h-12 px-4 text-left align-middle font-medium">상태</th>
            <th class="h-12 px-4 text-left align-middle font-medium">작업</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-4 align-middle">ORD-001</td>
            <td class="p-4 align-middle">하삼동치킨</td>
            <td class="p-4 align-middle">김배달</td>
            <td class="p-4 align-middle">하삼동치킨</td>
            <td class="p-4 align-middle">강남구</td>
            <td class="p-4 align-middle">배달중</td>
            <td class="p-4 align-middle">
              <button class="text-sm text-primary hover:underline">상세</button>
              <button class="text-sm text-destructive hover:underline ml-2">취소</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script> 