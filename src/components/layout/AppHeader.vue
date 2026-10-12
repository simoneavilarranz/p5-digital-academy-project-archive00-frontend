<script setup>
import { useAuthStore } from '@/stores/authStore';
import { RouterLink, useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter()

function handleLogout() {
    authStore.logout()
    router.push('/')
}
</script>

<template>
    <header class="w-full bg-white border-b border-black">
        <nav class="mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <RouterLink class="font-bold text-blue text-2xl md:text-3xl hover:underline underline-offset-2" to="/">
                ARCHIVE_00
            </RouterLink>
            <ul class="flex gap-2 items-center md:gap-6 m-0 p-0">
                <li>
                    <RouterLink
                        class="border border-black bg-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium hover:bg-blue hover:text-white active:bg-black active:text-white transition-colors"
                        to="/">
                        EXPLORE
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="authStore.isAuthenticated ? '/profile' : '/login'"
                        class="border border-black bg-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium hover:bg-blue hover:text-white active:bg-black active:text-white transition-colors">
                        {{ authStore.isAuthenticated ? 'PROFILE' : 'LOGIN' }}
                    </RouterLink>
                </li>
                <li v-if="authStore.isAuthenticated">
                    <button @click="handleLogout"
                        class="border border-black bg-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium hover:bg-blue hover:text-white active:bg-black active:text-white transition-colors">
                        LOGOUT
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>