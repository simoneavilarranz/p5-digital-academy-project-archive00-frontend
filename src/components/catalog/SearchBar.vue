<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
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
<template>
    <form @submit.prevent="handleSubmit" class="flex gap-0 mx-auto max-w-2xl">
        <input :value="modelValue" :placeholder="placeholder" @input="handleInput"
            class="flex-1 border border-black bg-white px-4 py-3 text-sm focus:outline-none focus:border-blue placeholder-gray-400" />
        <button type="submit"
            class="bg-black text-white px-6 py-3 text-sm font-bold uppercase border border-black hover:bg-blue active:bg-black transition-colors">
            SEARCH
        </button>
    </form>
</template>