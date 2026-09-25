<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <AppHeader v-if="!route.meta.hideHeader" />
  <RouterView />
</template>

<style scoped></style>