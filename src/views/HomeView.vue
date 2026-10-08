<script setup>
import AlbumCard from '@/components/catalog/AlbumCard.vue';
import ArtistCard from '@/components/catalog/ArtistCard.vue';
import SearchBar from '@/components/catalog/SearchBar.vue';
import { catalogService } from '@/services/catalogService';
import { computed, ref } from 'vue';

const query = ref('')
const searchTerm = ref('')
const results = ref(null)
const loading = ref(false)
const error = ref('')

async function handleSearch() {
    if (!query.value.trim()) return
    loading.value = true
    error.value = ''

    try {
        const response = await catalogService.search(query.value)
        results.value = response.data
        searchTerm.value = query.value
    } catch (err) {
        error.value = err.response?.data?.message || 'Error searching. Please try again.'
        results.value = null
    } finally {
        loading.value = false
    }
}

const filter = ref('all')

const filters = [
    { value: 'all', label: 'All' },
    { value: 'releases', label: 'Releases' },
    { value: 'artists', label: 'Artists' },
]

const filteredResults = computed(() => {
    if (!results.value) return []

    const albums = results.value.albums.map((album) => ({ ...album, type: 'album' }))
    const artists = results.value.artists.map((artist) => ({ ...artist, type: 'artist' }))

    if (filter.value === 'releases') return albums
    if (filter.value === 'artists') return artists
    return [...albums, ...artists]
})

const hasResults = computed(() => filteredResults.value.length > 0)
</script>
<template>
    <div class="min-h-screen bg-white px-4 py-8 md:px-6 md:py-12">
        <div class="mx-auto max-w-7xl">
            <h1 class="text-blue text-3xl md:text-5xl font-bold mb-2 text-center">WELCOME TO ARCHIVE_00</h1>
            <p class="text-sm text-gray-500 mb-8 text-center">Search for albums and artists.</p>

            <SearchBar v-model="query" placeholder="Start searching..." @submit="handleSearch" />

            <p v-if="loading" class="mt-8 text-center text-sm text-gray-500">
                Searching...
            </p>

            <p v-else-if="error" class="mt-8 text-center text-sm text-red-600">
                {{ error }}
            </p>

            <div v-else-if="results" class="mt-8">
                <div class="flex justify-center gap-2 mb-8">
                    <button v-for="f in filters" :key="f.value" @click="filter = f.value" :class="[
                        'px-4 py-2 text-xs font-bold uppercase tracking-wide border border-black transition-colors',
                        filter === f.value
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-blue hover:text-white hover:border-blue',
                    ]">
                        {{ f.label }}
                    </button>
                </div>

                <div v-if="hasResults" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <template v-for="item in filteredResults">
                        <AlbumCard v-if="item.type === 'album'" :key="`album-${item.name}-${item.artist}`"
                            :album="item" />
                        <ArtistCard v-else :key="`artist-${item.name}`" :artist="item" />
                    </template>
                </div>

                <p v-else class="text-center text-sm text-gray-500 mt-8">
                    No results found for "{{ searchTerm }}".
                </p>
            </div>
        </div>
    </div>
</template>