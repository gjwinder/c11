<script setup lang="ts">
import { RouterView } from 'vue-router'

defineProps<{
  theme?: string
}>()
</script>

<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<style scoped>
.main-layout {
  width: 100%;
  height: 100%;
}
</style>