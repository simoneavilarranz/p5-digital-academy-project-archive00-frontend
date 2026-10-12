<script setup>
import TrackList from '@/components/catalog/TrackList.vue';
import { catalogService } from '@/services/catalogService';
import { collectionService } from '@/services/collectionService';
import { useAuthStore } from '@/stores/authStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import addIcon from '../assets/addicon.svg'
import archiveIcon from '../assets/archiveicon.svg'

const route = useRoute()
const album = ref(null)
const loading = ref(true)
const error = ref('')

const authStore = useAuthStore()
const showRatingModal = ref(false)
const selectedRating = ref(0)
const saving = ref(false)
const message = ref('')
const savedItem = ref(null)

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

async function saveAlbum() {
    if (selectedRating.value < 1) return

    saving.value = true
    message.value = ''

    try {
        const response = await collectionService.add({
            lastFmId: `${album.value.artist}/${album.value.name}`,
            albumName: album.value.name,
            artistName: album.value.artist,
            coverUrl: album.value.imageUrl,
            type: 'SAVED',
            rating: selectedRating.value,
        })
        savedItem.value = response.data
        showRatingModal.value = false
        message.value = 'Album saved!'
        selectedRating.value = 0
    } catch (err) {
        message.value = err.response?.data?.message || 'Error saving album.'
    } finally {
        saving.value = false
    }
}

async function archiveAlbum() {
    saving.value = true
    message.value = ''

    try {
        const response = await collectionService.add({
            lastFmId: `${album.value.artist}/${album.value.name}`,
            albumName: album.value.name,
            artistName: album.value.artist,
            coverUrl: album.value.imageUrl,
            type: 'ARCHIVE',
        })
        savedItem.value = response.data
        message.value = 'Album archived!'
    } catch (err) {
        message.value = err.response?.data?.message || 'Error archiving album.'
    } finally {
        saving.value = false
    }
}
</script>
<template>
    <div class="min-h-screen bg-white px-6 py-6 md:px-8 md:py-8">
        <p v-if="loading" class="text-center text-sm text-gray-500">Loading...</p>
        <p v-else-if="error" class="text-center text-sm text-red-600">{{ error }}</p>
        <div v-else-if="album" class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="md:col-span-1">
                <img :src="album.imageUrl" :alt="album.name" class="w-full border border-black">
                <div v-if="authStore.isAuthenticated" class="mt-4 flex gap-2">
                    <button @click="showRatingModal = true" :disabled="saving"
                        class="w-full border border-black bg-white px-4 py-3 text-lg font-bold uppercase tracking-wide hover:bg-blue hover:text-white transition-colors disabled:opacity-50">
                        Save
                    </button>
                    <button @click="archiveAlbum" :disabled="saving"
                        class="w-full border border-black bg-white px-4 py-3 text-lg font-bold uppercase tracking-wide hover:bg-blue hover:text-white transition-colors disabled:opacity-50">
                        Archive
                    </button>
                </div>
                <p v-if="message" class="mt-2 text-xs text-center text-blue">
                    {{ message }}
                </p>
                <p v-else class="mt-4 text-lg text-gray-500 text-center">
                    <RouterLink to="/login" class="text-blue hover:underline">Log in</RouterLink> to save albums.
                </p>
            </div>
            <div class="md:col-span-2">
                <h1 class="text-blue text-3xl md:text-5xl font-bold mb-2">{{ album.name }}</h1>
                <p class="text-2xl text-gray-500 mb-5 pb-5 border-b-2 border-black">{{ album.artist }}</p>
                <p v-if="album.description" class="text-md mb-8 whitespace-pre-line">{{ album.description }}</p>
                <h2 class="text-xl font-bold text-blue mb-4">TRACKLIST</h2>
                <TrackList :tracks="album.tracks" />
            </div>
        </div>
        <div v-if="showRatingModal" @click.self="showRatingModal = false">
            <div>
                <h3>Rate this album</h3>
                <div>
                    <button v-for="n in 5" :key="n" @click="selectedRating = n">
                        ★
                    </button>
                </div>
                <div>
                    <button @click="showRatingModal = false">Cancel
                    </button>
                    <button @click="saveAlbum" :disabled="selectedRating < 1 || saving">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>