<script setup>
import CollectionItem from '@/components/collection/CollectionItem.vue'
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

async function removeItem(id) {
    try {
        await collectionService.remove(id)
        savedItems.value = savedItems.value.filter((item) => item.id !== id)
        archivedItems.value = archivedItems.value.filter((item) => item.id !== id)
    } catch (err) {
        console.error('Error removing item:', err)
    }
}
</script>
<template>
    <div class="min-h-screen bg-white px-4 py-4 md:px-6 md:py-6">
        <p v-if="loading" class="text-center text-sm text-gray-500">Loading...</p>
        <p v-else-if="error" class="text-center text-sm text-red-600">{{ error }}</p>
        <div v-else-if="user" class="mx-auto flex flex-col gap-6 md:flex-row md:h-[calc(100vh-8rem)]">
            <div class="md:w-64">
                <div class="w-32 h-32 border border-black bg-white flex items-center justify-center mb-4">
                    <span class="text-blue text-6xl font-bold uppercase">
                        {{ user.username.charAt(0) }}
                    </span>
                </div>
                <h1 class="text-blue text-2xl font-bold mb-2">{{ user.username }}</h1>
                <p class="text-lg text-gray-500 mb-4">{{ user.email }}</p>
                <div class="grid grid-cols-2 gap-2">
                    <div class="border border-black p-3">
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Collection</p>
                        <p class="text-lg font-bold">{{ savedItems.length }}</p>
                    </div>
                    <div class="border border-black p-3">
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Archive</p>
                        <p class="text-lg font-bold">{{ archivedItems.length }}</p>
                    </div>
                </div>
            </div>
            <div class="flex-1 md:overflow-y-auto md:pr-6">
                <div class="mb-4 pb-2 flex justify-between items-baseline">
                    <h2 class="text-blue text-lg font-bold uppercase tracking-wide">Collection</h2>
                </div>
                <div v-if="latestSaved.length > 0" class="border-t border-l border-r border-black">
                    <CollectionItem v-for="item in latestSaved" :key="item.id" :item="item" :removable="true"
                        @remove="removeItem" />
                </div>
                <p v-else class="text-lg text-gray-500 py-4">No albums saved yet.</p>
            </div>
            <div class="flex-1 md:overflow-y-auto">
                <div class="mb-4 pb-2 flex justify-between items-baseline">
                    <h2 class="text-blue text-lg font-bold uppercase tracking-wide">Archive</h2>
                </div>
                <div v-if="latestArchived.length > 0" class="border-t border-l border-r border-black">
                    <CollectionItem v-for="item in latestArchived" :key="item.id" :item="item" :removable="true"
                        @remove="removeItem" />
                </div>
                <p v-else class="text-lg text-gray-500 py-4">Archive is empty.</p>
            </div>
        </div>
    </div>
</template>