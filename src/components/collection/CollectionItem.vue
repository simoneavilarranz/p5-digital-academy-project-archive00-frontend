<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    item: {
        type: Object,
        required: true,
    },
    removable: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['remove'])
</script>
<template>
    <div class="flex items-center border-b border-black">
        <RouterLink :to="`/album/${encodeURIComponent(item.artistName)}/${encodeURIComponent(item.albumName)}`"
            class="flex flex-1 gap-4 px-4 py-4 hover:bg-gray-light transition-colors min-w-0">
            <img :src="item.coverUrl" :alt="item.albumName"
                class="w-20 h-20 border border-black bg-gray-medium shrink-0" />
            <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold truncate">{{ item.albumName }}</h3>
                <p class="text-sm text-gray-500 truncate mb-1">{{ item.artistName }}</p>
                <p v-if="item.reviewText" class="text-sm text-gray-700 line-clamp-2">
                    {{ item.reviewText }}
                </p>
            </div>
            <div v-if="item.rating" class="shrink-0 text-md">
                <span v-for="n in 5" :key="n" :class="n <= item.rating ? 'text-blue' : 'text-gray-300'">
                    ★
                </span>
            </div>
        </RouterLink>
        <button v-if="removable" @click="$emit('remove', item.id)"
            class="px-4 py-4 text-lg font-bold text-gray-500 hover:text-red-600 transition-colors"
            title="Remove from collection">
            ✕
        </button>
    </div>
</template>