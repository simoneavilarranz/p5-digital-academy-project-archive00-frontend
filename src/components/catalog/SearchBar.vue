<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: 'Search...' },
})

const emit = defineEmits(['update:modelValue', 'submit'])

function handleInput(event) {
    emit('update:modelValue', event.target.value)
}

function handleSubmit() {
    emit('submit')
}
</script>