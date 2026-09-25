<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="w-full bg-white border-b border-black">
        <nav class="mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <RouterLink class="font-bold text-blue text-2xl md:text-3xl hover:underline underline-offset-2" to="/">
                ARCHIVE_00
            </RouterLink>
            <ul class="flex gap-2 md:gap-6 m-0 p-0">
                <li>
                    <RouterLink
                        class="border border-black bg-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium hover:bg-blue hover:text-white active:bg-black active:text-white transition-colors"
                        to="/">
                        EXPLORE
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="border border-black bg-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium hover:bg-blue hover:text-white active:bg-black active:text-white transition-colors"
                        to="/login">
                        PROFILE
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>