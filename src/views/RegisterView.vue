<script setup>
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
    <h1>REGISTER</h1>
</template>

<style scoped></style>