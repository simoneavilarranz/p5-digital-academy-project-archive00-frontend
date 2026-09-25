<script setup>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <AppHeader v-if="!route.meta.hideHeader" />
  <RouterView />
  <AppFooter v-if="!route.meta.hideHeader" />
</template>

<style scoped></style>