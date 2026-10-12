<script setup>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader v-if="!route.meta.hideHeader" />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter v-if="!route.meta.hideFooter" />
  </div>
</template>

<style scoped></style>