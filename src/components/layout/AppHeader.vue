<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
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