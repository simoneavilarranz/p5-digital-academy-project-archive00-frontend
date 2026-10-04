<script setup>
import FormInput from '@/components/common/FormInput.vue'
import PasswordInput from '@/components/common/PasswordInput.vue'
import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const form = ref({
    email: '',
    password: '',
})

const error = ref('')

const router = useRouter()
const authStore = useAuthStore()
</script>

<template>
    <h1>LOGIN</h1>
</template>

<style scoped></style>