<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <RouterLink :to="`/album/${encodeURIComponent(item.artistName)}/${encodeURIComponent(item.albumName)}`"
        class="flex gap-4 border-b border-black px-4 py-4 hover:bg-gray-light transition-colors">
        <img :src="item.coverUrl" :alt="item.albumName" class="w-16 h-16 border border-black bg-gray-medium shrink-0" />
        <div class="flex-1 min-w-0">
            <h3 class="text-sm font-bold truncate">{{ item.albumName }}</h3>
            <p class="text-xs text-gray-500 truncate mb-1">{{ item.artistName }}</p>
            <p v-if="item.reviewText" class="text-xs text-gray-700 line-clamp-2">
                {{ item.reviewText }}
            </p>
        </div>
        <div v-if="item.rating" class="shrink-0 text-sm">
            <span v-for="n in 5" :key="n" :class="n <= item.rating ? 'text-blue' : 'text-gray-300'">
                ★
            </span>
        </div>
    </RouterLink>
</template>