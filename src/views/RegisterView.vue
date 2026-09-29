<script setup>
import FormInput from '@/components/common/FormInput.vue';
import PasswordInput from '@/components/common/PasswordInput.vue';
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { authService } from '@/services/authService';

const form = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const error = ref('')

const router = useRouter()

async function handleSubmit() {
    error.value = '';
    if (form.value.password !== form.value.confirmPassword) {
        error.value = 'Passwords do not match'
        return
    }
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="w-full max-w-md border border-black shadow-lg p-8 md:p-10">
            <p class="text-blue text-center text-lg font-bold mb-1">ARCHIVE_00</p>
            <h1 class="text-blue text-center text-3xl md:text-5xl font-bold mb-2">REGISTER</h1>
            <p class="text-center text-sm text-gray-500 mb-6">Create an account to join the ARCHIVE_00 community.</p>
            <form @submit.prevent="handleSubmit">
                <FormInput id="username" label="Username" v-model="form.username" placeholder="Enter a username" />
                <FormInput id="email" label="Email" type="email" v-model="form.email"
                    placeholder="example@archive.com" />
                <PasswordInput id="password" label="Password" v-model="form.password" />
                <PasswordInput id="confirmPassword" label="Confirm Password" v-model="form.confirmPassword" />
                <p v-if="error" class="text-red-600 text-xs text-center mb-4">{{ error }}</p>
                <button type="submit"
                    class="w-full bg-blue text-white px-4 py-3 text-sm font-bold uppercase hover:bg-black transition-colors">
                    CREATE ACCOUNT →
                </button>
            </form>
            <p class="text-center text-sm text-gray-500 mt-6">Already have an account?
                <RouterLink to="/login" class="text-blue font-bold hover:underline">LOG IN</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped></style>