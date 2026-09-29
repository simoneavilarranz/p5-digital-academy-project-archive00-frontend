<script setup>
import FormInput from '@/components/common/FormInput.vue';
import PasswordInput from '@/components/common/PasswordInput.vue';
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';


const form = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const error = ref('')

const router = useRouter()

async function handleSubmit() {

}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="w-full max-w-md border border-black shadow-lg p-8 md:p-10">
            <p>ARCHIVE_00</p>
            <h1>REGISTER</h1>
            <p>Create an account to join the ARCHIVE_00 community.</p>
            <form @submit.prevent="handleSubmit">
                <FormInput id="username" label="Username" v-model="form.username" placeholder="Enter a username" />
                <FormInput id="email" label="Email" type="email" v-model="form.email"
                    placeholder="example@archive.com" />
                <PasswordInput id="password" label="Password" v-model="form.password" />
                <PasswordInput id="confirmPassword" label="Confirm Password" v-model="form.confirmPassword" />
                <p v-if="error">{{ error }}</p>
                <button type="submit">CREATE ACCOUNT →</button>
            </form>
            <p>Already have an account? <RouterLink to="/login">LOG IN</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped></style>