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
        error.value = 'Error searching. Please try again.'
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
    <h1>WELCOME TO ARCHIVE_00</h1>
    <p>Search for albums and artists.</p>
    <SearchBar v-model="query" placeholder="Start searching..." @submit="handleSearch" />
    <p v-if="loading">Searching...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="results">
        <div>
            <button v-for="f in filters" :key="f.value" @click="filter = f.value">{{ f.label }}</button>
        </div>
        <div v-if="hasResults">
            <template v-for="item in filteredResults">
                <AlbumCard v-if="item.type === 'album'" :key="`album-${item.name}-${item.artist}`" :album="item" />
                <ArtistCard v-else :key="`artist-${item.name}`" :artist="item" />
            </template>
        </div>
        <p v-else>
            No results found for "{{ searchTerm }}".
        </p>
    </div>
</template>