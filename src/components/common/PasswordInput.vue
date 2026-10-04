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

<template>
    <div class="mb-4">
        <label :for="id" class="block text-xs font-bold uppercase tracking-wider text-black mb-2">{{ label }}</label>
        <div class="relative">
            <input :id="id" :type="showPassword ? 'text' : 'password'" :value="modelValue" :placeholder="placeholder"
                class="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-blue placeholder-gray-400"
                @input="$emit('update:modelValue', $event.target.value)" />
            <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black hover:text-blue">
                {{ showPassword ? 'HIDE' : 'SHOW' }}
            </button>
        </div>
    </div>
</template>