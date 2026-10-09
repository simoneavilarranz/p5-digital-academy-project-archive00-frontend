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
    <div>
        <div>
            <p v-if="loading">Loading...</p>
            <p v-if="error">{{ error }}</p>
            <div v-else-if="album">
                <img :src="album.imageUrl" :alt="album.name">
                <div>
                    <h1>{{ album.name }}</h1>
                    <p>{{ album.artist }}</p>
                    <p>{{ album.description }}</p>
                    <h2>TRACKLIST</h2>
                    <TrackList :tracks="album.tracks" />
                </div>
            </div>
        </div>
    </div>
</template>