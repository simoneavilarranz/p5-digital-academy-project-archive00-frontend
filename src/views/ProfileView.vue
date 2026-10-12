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
    <div>
        <p v-if="loading">Loading...</p>
        <p v-else-if="error">{{ error }}</p>
        <div v-else-if="user">
            <div>
                <div></div>
                <h1>{{ user.username }}</h1>
                <p>{{ user.email }}</p>
                <RouterLink to="/settings">
                    Settings
                </RouterLink>
                <div>
                    <div>
                        <p>Collection</p>
                        <p>{{ savedItems.length }}</p>
                    </div>
                    <div>
                        <p>Archive</p>
                        <p>{{ archivedItems.length }}</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>Collection</h2>
                    <RouterLink to="/profile/collection">
                        View all →
                    </RouterLink>
                </div>

                <div v-if="latestSaved.length > 0">
                    <CollectionItem v-for="item in latestSaved" :key="item.id" :item="item" />
                </div>
                <p v-else>No albums saved yet.</p>
            </div>
            <div>
                <div>
                    <h2>Archive</h2>
                    <RouterLink to="/profile/archive">
                        View all →
                    </RouterLink>
                </div>
                <div v-if="latestArchived.length > 0">
                    <CollectionItem v-for="item in latestArchived" :key="item.id" :item="item" />
                </div>
                <p v-else>Archive is empty.</p>
            </div>
        </div>
    </div>
</template>