<template>
  <div>
    <Title>Characters</Title>

    <v-container>
      <ui-dialog class="mb-4" v-model:status="status" v-model:gender="gender"></ui-dialog>

      <div v-if="loading" class="text-center">
        <v-progress-circular />
      </div>

      <template v-else-if="hasNoResultsState">
        <div class="text-h4 text-center">No results</div>
      </template>

      <template v-else-if="!loading && result">
        <v-row class="mb-4">
          <v-col class="pa-4" v-for="character in result.characters.results" :key="character.id" cols="12" sm="6" md="4"
            xl="3">
            <characters-card :id="character.id" :name="character.name" :image="character.image" :status="character.status"
              :gender="character.gender">
            </characters-card>
          </v-col>
        </v-row>
        <template v-if="result.characters.info">
          <v-pagination v-model="page" :length="result.characters.info.pages" />
        </template>
      </template>
    </v-container>
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'

const { page } = usePagination()
const { search } = useSearch()
const { status, gender } = useCharactersFilters()
const { loading, result } = useCharactersList(
  reactive({
    page,
    filter: {
      name: search,
      status: status,
      gender: gender
    },
  })
)

const hasNoResultsState = computed(
  () => !loading.value && result.value.characters.results.length === 0
)
</script>

