<template>
  <div>
    <Title>Episodes</Title>
    <v-container>

      <div v-if="loading" class="text-center">
        <v-progress-circular />
      </div>

      <template v-else-if="hasNoResultsState">
        <div class="text-h4 text-center">No results</div>
      </template>

      <template v-else-if="!loading && result">
        <v-row class="mb-4">
          <v-col v-for="episode in result.episodes.results" :key="episode.id" cols="12" sm="6" md="4" xl="3">
            <v-card class="mx-auto text-center" color="primary">
              <v-card-title>
                {{ episode.name }}
              </v-card-title>

              <v-card-subtitle>
                <p> {{ episode.episode }}</p>
              </v-card-subtitle>

              <v-card-actions>
                <v-btn class="mx-auto" :icon="show[episode.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="toggleShow(episode.id, false)"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show[episode.id]">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ episode.air_date }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>

          </v-col>
        </v-row>
        <template v-if="result.episodes.info">
          <v-pagination v-model="page" :length="result.episodes.info.pages" />
        </template>
      </template>
    </v-container>
  </div>
</template>
    
<script setup lang="ts">
import { reactive } from 'vue'

const show = ref({})

const { search } = useSearch()
const { page } = usePagination()
const { loading, result } = useEpisodesList(
  reactive({
    page,
    filter: {
      name: search,
    },
  })
)
const hasNoResultsState = computed(
  () => !loading.value && result.value.episodes.results.length === 0
)

const toggleShow = (id: string, _status: boolean) => {
  show.value[id] = !show.value[id];

}
</script>
