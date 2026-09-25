<script setup>
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="w-full bg-white border-t border-black">
        <div class="mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <RouterLink class="font-medium text-black text-sm md:text-base hover:underline underline-offset-2" to="/">
                ARCHIVE_00
            </RouterLink>
            <p>
                © {{ currentYear }} Archive_00. All rights reserved.
            </p>
            <a href="https://github.com/simoneavilarranz" target="_blank" rel="noopener"
                class="font-medium text-black text-sm md:text-base hover:underline underline-offset-2">
                [ GITHUB ]
            </a>
        </div>
    </footer>
</template>

<style scoped></style>