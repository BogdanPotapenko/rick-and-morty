<template>
  <v-text-field v-model="searchInput" max-width="400" append-inner-icon="mdi-magnify" single-line hide-details />
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'update:search', value?: string): void
}>()

const searchInput = ref()
const debouncedSearch = refDebounced(searchInput, 300)


watch(debouncedSearch, () => {
  return emit('update:search', searchInput.value)
})
</script>