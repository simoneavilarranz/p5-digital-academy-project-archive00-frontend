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
    <RouterLink :to="`/album/${encodeURIComponent(album.artist)}/${encodeURIComponent(album.name)}`">
        <img :src="album.imageUrl" :alt="album.name">
        <h3>{{ album.name }}</h3>
        <p>{{ album.artist }}</p>
    </RouterLink>
</template>