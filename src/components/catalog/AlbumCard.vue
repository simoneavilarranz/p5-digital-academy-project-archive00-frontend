<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    album: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <RouterLink :to="`/album/${encodeURIComponent(album.artist)}/${encodeURIComponent(album.name)}`"
        class="block border border-black bg-white p-3 hover:bg-gray-light transition-colors">
        <img :src="album.imageUrl" :alt="album.name" class="w-full aspect-square object-cover bg-gray-medium mb-3">
        <h3 class="text-sm font-bold truncate mb-1">{{ album.name }}</h3>
        <p class="text-xs text-gray-500 truncate">{{ album.artist }}</p>
    </RouterLink>
</template>