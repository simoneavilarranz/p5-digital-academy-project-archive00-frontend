<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <RouterLink :to="`/album/${encodeURIComponent(item.artistName)}/${encodeURIComponent(item.albumName)}`">
        <img :src="item.coverUrl" :alt="item.albumName">
        <div>
            <h3>{{ item.albumName }}</h3>
            <p>{{ item.artistName }}</p>
            <p v-if="item.reviewText">
                {{ item.reviewText }}
            </p>
        </div>
        <div v-if="item.rating">
            <span v-for="n in 5" :key="n">
                ★
            </span>
        </div>
    </RouterLink>
</template>