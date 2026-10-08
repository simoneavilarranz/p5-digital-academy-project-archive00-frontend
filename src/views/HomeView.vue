<script setup>
import SearchBar from '@/components/catalog/SearchBar.vue';
import { catalogService } from '@/services/catalogService';
import { ref } from 'vue';

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
</script>
<template>
    <h1>WELCOME TO ARCHIVE_00</h1>
    <p>Search for albums and artists.</p>
    <SearchBar v-model="query" placeholder="Sear" />
    <p v-if="loading">Searching...</p>
    <p v-if="error">{{ error }}</p>
</template>