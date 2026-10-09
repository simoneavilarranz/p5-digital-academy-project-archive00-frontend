<script setup>
import { catalogService } from '@/services/catalogService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const artist = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    const { name } = route.params

    try {
        const response = await catalogService.getArtistDetails(name)
        artist.value = response.data
    } catch (err) {
        error.value = err.response?.data?.message || 'Error loading artist.'
    } finally {
        loading.value = false
    }
})
</script>