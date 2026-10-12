<script setup>
import CollectionItem from '@/components/collection/CollectionItem.vue'
import { RouterLink } from 'vue-router'
import { collectionService } from '@/services/collectionService'
import { userService } from '@/services/userService'
import { computed, onMounted, ref } from 'vue'

const user = ref(null)
const savedItems = ref([])
const archivedItems = ref([])
const loading = ref(true)
const error = ref('')

const latestSaved = computed(() => savedItems.value.slice(0, 5))
const latestArchived = computed(() => archivedItems.value.slice(0, 5))

onMounted(async () => {
    try {
        const [userRes, collectionRes] = await Promise.all([
            userService.getMe(),
            collectionService.getMine(),
        ])

        user.value = userRes.data
        savedItems.value = collectionRes.data
            .filter((item) => item.type === 'SAVED')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        archivedItems.value = collectionRes.data
            .filter((item) => item.type === 'ARCHIVE')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } catch (err) {
        error.value = err.response?.data?.message || 'Error loading profile.'
    } finally {
        loading.value = false
    }
})
</script>
<template>
    <div class="min-h-screen bg-white px-4 py-4 md:px-6 md:py-6">
        <p v-if="loading" class="text-center text-sm text-gray-500">Loading...</p>
        <p v-else-if="error" class="text-center text-sm text-red-600">{{ error }}</p>
        <div v-else-if="user" class="mx-auto grid grid-cols-1 gap-6 md:grid-cols-5">
            <div class="md:col-span-1">
                <div class="w-32 h-32 border border-black bg-white flex items-center justify-center mb-4">
                    <span class="text-blue text-6xl font-bold uppercase">
                        {{ user.username.charAt(0) }}
                    </span>
                </div>
                <h1 class="text-blue text-2xl font-bold mb-2">{{ user.username }}</h1>
                <p class="text-sm text-gray-500 mb-4">{{ user.email }}</p>
                <RouterLink to="/settings"
                    class="block text-center border border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-blue hover:text-white transition-colors mb-6">
                    Settings
                </RouterLink>
                <div class="grid grid-cols-2 gap-2">
                    <div class="border border-black p-3">
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Collection</p>
                        <p class="text-lg font-bold">{{ savedItems.length }}</p>
                    </div>
                    <div class="border border-black p-3">
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Archive</p>
                        <p class="text-lg font-bold">{{ archivedItems.length }}</p>
                    </div>
                </div>
            </div>
            <div class="md:col-span-2">
                <div class="mb-4 pb-2 flex justify-between items-baseline">
                    <h2 class="text-blue text-lg font-bold uppercase tracking-wide">Collection</h2>
                    <RouterLink to="/profile/collection" class="text-xs text-gray-500 hover:text-blue">
                        View all →
                    </RouterLink>
                </div>
                <div v-if="latestSaved.length > 0" class="border-t border-l border-r border-black">
                    <CollectionItem v-for="item in latestSaved" :key="item.id" :item="item" />
                </div>
                <p v-else class="text-xs text-gray-500 py-4">No albums saved yet.</p>
            </div>
            <div class="md:col-span-2">
                <div class="mb-4 pb-2 flex justify-between items-baseline">
                    <h2 class="text-blue text-lg font-bold uppercase tracking-wide">Archive</h2>
                    <RouterLink to="/profile/archive" class="text-xs text-gray-500 hover:text-blue">
                        View all →
                    </RouterLink>
                </div>
                <div v-if="latestArchived.length > 0" class="border-t border-l border-r border-black">
                    <CollectionItem v-for="item in latestArchived" :key="item.id" :item="item" />
                </div>
                <p v-else class="text-xs text-gray-500 py-4">Archive is empty.</p>
            </div>
        </div>
    </div>
</template>