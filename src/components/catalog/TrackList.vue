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
    <div>
        <div v-for="track in tracks" :key="track.position">
            <span>{{ String(track.position).padStart(2, '0') }}</span>
            <span>{{ track.name }}</span>
            <span>{{ formatDuration(track.duration) }}</span>
        </div>
    </div>
</template>