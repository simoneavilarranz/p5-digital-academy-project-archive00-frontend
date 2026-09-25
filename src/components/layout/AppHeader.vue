<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="w-full bg-white border-b border-black">
        <nav class="mx-auto flex items-center justify-between px-6 py-4">
            <RouterLink to="/">
                ARCHIVE_00
            </RouterLink>
            <ul>
                <li>
                    <RouterLink to="/">
                        EXPLORE
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/login">
                        PERFIL
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>