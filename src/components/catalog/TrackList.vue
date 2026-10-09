<script setup>
defineProps({
    tracks: {
        type: Array,
        required: true,
    },
})

function formatDuration(seconds) {
    if (!seconds) return '0:00'
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
}
</script>
<template>
    <div class="border border-black">
        <div v-for="track in tracks" :key="track.position"
            class="flex items-center gap-4 px-4 py-3 text-md border-b border-black last:border-b-0">
            <span class="text-gray-500 font-mono w-8 shrink-0">
                {{ String(track.position).padStart(2, '0') }}</span>
            <span class="flex-1 truncate">{{ track.name }}</span>
            <span class=" text-gray-500 font-mono shrink-0">{{ formatDuration(track.duration) }}</span>
        </div>
    </div>
</template>