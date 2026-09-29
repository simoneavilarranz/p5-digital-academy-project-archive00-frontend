<script setup>

const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    id: { type: String, required: true },
})

</script>