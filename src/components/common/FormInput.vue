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
    <div>
        <label :for="id">{{ label }}</label>
        <input :id="id" :type="type" :value="modelValue" :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>