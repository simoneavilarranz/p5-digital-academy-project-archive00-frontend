<script setup>
import AlbumCard from '@/components/catalog/AlbumCard.vue'
import { catalogService } from '@/services/catalogService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const artist = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    const { name } = route.params

    try {
        const response = await catalogService.getArtistDetails(name)
        artist.value = response.data
    } catch (err) {
        error.value = err.response?.data?.message || 'Error loading artist.'
    } finally {
        loading.value = false
    }
})
</script>
<template>
    <div class="min-h-screen bg-white px-4 py-6 md:px-6 md:py-8">
        <p v-if="loading" class="text-center text-sm text-gray-500">Loading...</p>
        <p v-else-if="error" class="text-center text-sm text-red-600">{{ error }}</p>
        <div v-else-if="artist" class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="md:col-span-1">
                <img :src="artist.imageUrl" :alt="artist.name" class="w-full border border-black mb-6" />
                <h1 class="text-blue text-3xl md:text-5xl font-bold mb-3 pb-3 border-b-2 border-black">
                    {{ artist.name }}
                </h1>
                <p v-if="artist.bio" class="text-md whitespace-pre-line">
                    {{ artist.bio }}
                </p>
            </div>
            <div class="md:col-span-2">
                <h2 class="text-xl font-bold text-blue mb-4">
                    RELEASES
                </h2>
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    <AlbumCard v-for="album in artist.topAlbums" :key="`${album.artist}-${album.name}`"
                        :album="album" />
                </div>
            </div>
        </div>
    </div>
</template>