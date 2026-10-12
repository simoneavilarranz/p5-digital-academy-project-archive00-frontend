<script setup>
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
    PROFILE
</template>