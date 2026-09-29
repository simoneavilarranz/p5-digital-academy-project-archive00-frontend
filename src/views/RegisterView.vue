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
                <FormInput id="username" label="Username" v-model="form.username" placeholder="Enter a username">
                </FormInput>
                <FormInput id="email" label="Email" type="email" v-model="form.email" placeholder="example@archive.com">
                </FormInput>
                <PasswordInput id="password" label="Password" v-model="form.password"></PasswordInput>
                <PasswordInput id="confirmPassword" label="Confirm Password" v-model="form.confirmPassword">
                </PasswordInput>
                <p v-if="error">{{ error }}</p>
                <button type="submit">CREATE ACCOUNT</button>
            </form>
            <p>Already have an account? <RouterLink to="/login">LOG IN</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped></style>