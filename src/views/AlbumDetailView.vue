<script setup>
import { catalogService } from '@/services/catalogService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const album = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    const { artist, album: albumName } = route.params

    try {
        const response = await catalogService.getAlbumDetails(artist, albumName)
        album.value = response.data
    } catch (err) {
        error.value = err.response?.data?.message || 'Error loading album.'
    } finally {
        loading.value = false
    }
})
</script>