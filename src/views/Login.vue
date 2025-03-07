<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <div class="w-full max-w-md space-y-8 p-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold">관리자 로그인</h2>
        <p class="mt-2 text-sm text-muted-foreground">
          관리자 계정으로 로그인하여 대시보드에 접근하세요
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium">이메일</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium">비밀번호</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    // TODO: API 연동
    // const response = await login(email.value, password.value)
    // if (response.success) {
    router.push('/')
    // }
  } catch (error) {
    console.error('로그인 실패:', error)
  }
}
</script> 