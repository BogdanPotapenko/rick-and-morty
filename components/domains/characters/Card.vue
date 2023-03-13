<template>
    <v-card height="100%" class="rounded-lg bg-primary pa-2">
        <NuxtLink :to="`/characters/${id}`">
            <v-row>
                <v-col cols="5">
                    <v-img :src="image" class="rounded-lg" :class="grayScaleWhenDead" />
                </v-col>
                <v-col cols="7">
                    <v-card-item>
                        <h3 class="text-xl mb-3">{{ name }}</h3>
                        <p>Status: {{ status }}</p>
                        <p>Gender: {{ gender }}</p>
                    </v-card-item>
                </v-col>
            </v-row>
        </NuxtLink>
    </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Character } from '~/types/generated/graphql'

const props = defineProps<{
    id: Character['id']
    name: Character['name']
    image: Character['image']
    status: Character['status']
    gender: Character['gender']
}>()

const grayScaleWhenDead = computed(() => props.status === 'Dead' ? 'grayscale-[100%]' : {})
</script>