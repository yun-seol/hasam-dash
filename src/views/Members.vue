<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">회원 관리</h1>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        회원 추가
      </button>
    </div>
    <div class="rounded-md border">
      <table class="w-full">
        <thead>
          <tr class="border-b bg-muted/50">
            <th class="h-12 px-4 text-left align-middle font-medium">ID</th>
            <th class="h-12 px-4 text-left align-middle font-medium">이름</th>
            <th class="h-12 px-4 text-left align-middle font-medium">이메일</th>
            <th class="h-12 px-4 text-left align-middle font-medium">전화번호</th>
            <th class="h-12 px-4 text-left align-middle font-medium">가입일</th>
            <th class="h-12 px-4 text-left align-middle font-medium">상태</th>
            <th class="h-12 px-4 text-left align-middle font-medium">작업</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-4 align-middle">1</td>
            <td class="p-4 align-middle">홍길동</td>
            <td class="p-4 align-middle">hong@example.com</td>
            <td class="p-4 align-middle">010-1234-5678</td>
            <td class="p-4 align-middle">2024-03-07</td>
            <td class="p-4 align-middle">활성</td>
            <td class="p-4 align-middle">
              <button class="text-sm text-primary hover:underline">수정</button>
              <button class="text-sm text-destructive hover:underline ml-2">삭제</button>
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