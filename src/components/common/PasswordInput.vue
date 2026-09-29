<script setup>
import { ref } from 'vue';


defineProps({
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: '' },
    id: { type: String, required: true },
})

defineEmits(['update:modelValue'])

const showPassword = ref(false)

</script>