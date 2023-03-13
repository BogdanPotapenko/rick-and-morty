<template>
  <div class="text-right">
    <v-btn color="primary" @click="dialog = true">
      Filters
    </v-btn>
    <v-dialog v-model="dialog" max-width="350" xs="w-50" class="d-flex justify-end">
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-select class="py-4 mt-8" clearable label="Status" v-model="statusInput" clear-icon="mdi-window-close"
                  :items="['Alive', 'Dead', 'Unknown']">
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-select class="py-4" clearable label="Gender" v-model="genderInput" clear-icon="mdi-window-close"
                  :items="['Female', 'Male', 'Genderless', 'Unknown']">
                </v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="reset()">Reset</v-btn>
          <v-btn @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'update:status', value?: string): void
  (e: 'update:gender', value?: string): void
}>()
const router = useRouter()

const valid = ref(false)
const form = ref(null);
const dialog = ref(false)

const statusInput = ref()
const genderInput = ref()
const debouncedStatus = refDebounced(statusInput, 100)
const debouncedGender = refDebounced(genderInput, 100)


watch(debouncedStatus, () => {
  emit('update:status', statusInput.value)
})

watch(debouncedGender, () => {
  emit('update:gender', genderInput.value)
})

const reset = () => {
  form.value.reset()
  router.push('/')
}
</script>