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
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="w-full max-w-md border border-black shadow-lg p-8 md:p-10">
            <p class="text-blue text-center text-lg font-bold mb-1">ARCHIVE_00</p>
            <h1 class="text-blue text-center text-3xl md:text-5xl font-bold mb-2">LOGIN</h1>
            <p class="text-center text-sm text-gray-500 mb-6">Access your ARCHIVE_00 account.</p>
            <form @submit.prevent="handleSubmit">
                <FormInput id="email" label="Email" type="email" v-model="form.email"
                    placeholder="example@archive.com" />
                <PasswordInput id="password" label="Password" v-model="form.password" />
                <p v-if="error" class="text-red-600 text-xs text-center mb-4">{{ error }}</p>
                <button type="submit"
                    class="w-full bg-blue text-white px-4 py-3 text-sm font-bold uppercase hover:bg-black transition-colors">
                    ACCESS →
                </button>
            </form>
            <p class="text-center text-sm text-gray-500 mt-6">Don't have an account?
                <RouterLink to="/register" class="text-blue font-bold hover:underline">REGISTER</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped></style>