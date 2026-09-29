<script setup>
import FormInput from '@/components/common/FormInput.vue';
import PasswordInput from '@/components/common/PasswordInput.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


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
    <div>
        <div>
            <p>ARCHIVE_00</p>
            <h1>REGISTER</h1>
            <p>Create an account to join the ARCHIVE_00 community.</p>
            <form action="">
                <FormInput></FormInput>
                <FormInput></FormInput>
                <PasswordInput></PasswordInput>
                <PasswordInput></PasswordInput>
                <p v-if="error">{{ error }}</p>
                <button type="submit">CREATE ACCOUNT</button>
            </form>
            <p>Already have an account? <RouterLink to="/login">LOG IN</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped></style>