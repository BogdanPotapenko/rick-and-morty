<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      <v-icon v-if="!drawer" icon="mdi-menu"></v-icon>
      <v-icon v-else-if="drawer" icon="mdi-window-close"></v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title class="ml-0">
      <div class="w-28">
        <nuxt-link to="/">
          <v-img src="./logo.png" />
        </nuxt-link>
      </div>
    </v-app-bar-title>
    <v-row justify="end" v-if="['index', 'episodes'].includes(String($route.name))">
      <v-col cols="9" sm="6" md="4" lg="3">
        <ui-search v-model:search="search"></ui-search>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact" nav>
      <v-list-item title="Characters" value="characters" @click="router.push('/')">
      </v-list-item>
      <v-list-item title="Episodes" value="episodes" @click="router.push('/episodes')">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

const { search } = useSearch()

const router = useRouter()

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>
