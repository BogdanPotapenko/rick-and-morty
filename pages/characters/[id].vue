<template>
  <div>
    <Title>Character</Title>

    <v-container>
      <div v-if="loading" class="text-center">
        <v-progress-circular />
      </div>

      <template v-else-if="hasNoResultsState">
        <div class="text-h4 text-center">No results</div>
      </template>

      <template v-else-if="!loading && result">
        <div class="rounded-lg bg-gray-900 p-8" :class="xs || sm ? 'block text-center ' : 'flex'">
          <img :src="result.character.image" class="rounded-xl m-8 " :class="xs || sm ? 'mx-auto' : ''" />
          <div class="text-white m-8">
            <h1 class="text-2xl font-semibold">{{ result.character.name }}</h1>
            <p>{{ result.character.status }}</p>
            <p>{{ result.character.species }}</p>
            <p>{{ result.character.location.name }}</p>
          </div>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useDisplay } from 'vuetify'

const route = useRoute()

const { xs, sm } = useDisplay()

const { loading, result } = useCharacterDetails(
  reactive({
    id: route.params.id
  }))

const hasNoResultsState = computed(
  () => !loading.value === false
)
</script>
