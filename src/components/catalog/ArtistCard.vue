<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    artist: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <RouterLink :to="`/artist/${encodeURIComponent(artist.name)}`"
        class="block border border-black bg-white p-3 hover:bg-gray-light transition-colors">
        <img :src="artist.imageUrl" :alt="artist.name" class="w-full aspect-square object-cover bg-gray-medium mb-3">
        <h3 class="text-sm font-bold truncate mb-1">{{ artist.name }}</h3>
    </RouterLink>
</template>