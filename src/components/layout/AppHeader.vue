<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="w-full bg-white border-b border-black">
        <nav class="mx-auto flex items-center justify-between px-6 py-4">
            <RouterLink class="font-bold text-blue text-3xl hover:underline underline-offset-3" to="/">
                ARCHIVE_00
            </RouterLink>
            <ul class="flex gap-6 m-0 p-0">
                <li>
                    <RouterLink
                        class="border border-black bg-white px-4 py-2 hover:bg-blue hover:text-white transition-colors text-sm"
                        to="/">
                        EXPLORE
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="border border-black bg-white px-4 py-2 hover:bg-blue hover:text-white transition-colors text-sm"
                        to="/login">
                        PROFILE
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>