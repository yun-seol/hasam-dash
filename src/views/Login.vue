<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <div class="w-full max-w-sm space-y-6 p-6">
      <div class="space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">
          관리자 로그인
        </h1>
        <p class="text-sm text-muted-foreground">
          관리자 계정으로 로그인하세요
        </p>
      </div>
      <div class="space-y-4">
        <div class="space-y-2">
          <Label for="email">이메일</Label>
          <Input 
            id="email" 
            v-model="email" 
            type="email" 
            placeholder="admin@hasamdong.com"
            :disabled="isLoading" 
          />
        </div>
        <div class="space-y-2">
          <Label for="password">비밀번호</Label>
          <Input 
            id="password" 
            v-model="password" 
            type="password"
            :disabled="isLoading" 
          />
        </div>
        <Button 
          class="w-full" 
          type="submit" 
          @click="handleLogin"
          :disabled="isLoading"
        >
          <span v-if="isLoading">로그인 중...</span>
          <span v-else>로그인</span>
        </Button>
        <p v-if="error" class="text-sm text-red-500 text-center">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const router = useRouter()
const email = ref('admin@hasamdong.com')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  try {
    isLoading.value = true
    error.value = ''

    // 임시 로그인 검증
    if (email.value === 'admin@hasamdong.com' && password.value === 'admin1234') {
      // 로그인 성공 처리
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', email.value)
      
      // 대시보드로 이동
      await router.push('/dashboard')
    } else {
      error.value = '이메일 또는 비밀번호가 올바르지 않습니다.'
    }
  } catch (err) {
    error.value = '로그인 중 오류가 발생했습니다.'
    console.error('로그인 실패:', err)
  } finally {
    isLoading.value = false
  }
}
</script> 