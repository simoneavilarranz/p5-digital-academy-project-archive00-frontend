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