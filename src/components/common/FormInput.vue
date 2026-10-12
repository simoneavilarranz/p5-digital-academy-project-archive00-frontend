<script setup>

defineProps({
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    id: { type: String, required: true },
})

defineEmits(['update:modelValue'])

</script>

<template>
    <div class="mb-4">
        <label :for="id" class="block text-xs font-bold uppercase tracking-wider text-black mb-2">{{ label }}</label>
        <input :id="id" :type="type" :value="modelValue" :placeholder="placeholder"
            class="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-blue placeholder-gray-400"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>