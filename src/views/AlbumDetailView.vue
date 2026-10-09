<script setup>
import TrackList from '@/components/catalog/TrackList.vue';
import { catalogService } from '@/services/catalogService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const album = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    const { artist, album: albumName } = route.params

    try {
        const response = await catalogService.getAlbumDetails(artist, albumName)
        album.value = response.data
    } catch (err) {
        error.value = err.response?.data?.message || 'Error loading album.'
    } finally {
        loading.value = false
    }
})
</script>
<template>
    <div class="min-h-screen bg-white px-4 py-4 md:px-8 md:py-8">
        <p v-if="loading" class="text-center text-sm text-gray-500">Loading...</p>
        <p v-else-if="error" class="text-center text-sm text-red-600">{{ error }}</p>
        <div v-else-if="album" class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="md:col-span-1">
                <img :src="album.imageUrl" :alt="album.name" class="w-full border border-black">
            </div>
            <div class="md:col-span-2">
                <h1 class="text-blue text-3xl md:text-5xl font-bold mb-2">{{ album.name }}</h1>
                <p class="text-2xl text-gray-500 mb-5 pb-5 border-b-2 border-black">{{ album.artist }}</p>
                <p v-if="album.description" class="text-md mb-8 whitespace-pre-line">{{ album.description }}</p>
                <h2 class="text-xl font-bold text-blue mb-4">TRACKLIST</h2>
                <TrackList :tracks="album.tracks" />
            </div>
        </div>
    </div>
</template>