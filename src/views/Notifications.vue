<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">알림 관리</h1>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        알림 발송
      </button>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-medium">FCM 푸시 알림</h3>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-medium">제목</label>
            <input type="text" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">내용</label>
            <textarea class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" rows="4"></textarea>
          </div>
          <button class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            발송
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-medium">카카오 메시지</h3>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-medium">제목</label>
            <input type="text" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
          </div>
          <div>
            <label class="block text-sm font-medium">내용</label>
            <textarea class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" rows="4"></textarea>
          </div>
          <button class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            발송
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script> 