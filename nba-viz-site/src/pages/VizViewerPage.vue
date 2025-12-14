<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-sm">
      <div class="text-h6">{{ title }}</div>
      <q-space />
      <q-btn outline icon="open_in_new" label="Open" :href="src" target="_blank" />
    </div>

    <div class="text-caption q-mb-md">iframe src: {{ src }}</div>

    <q-card>
      <q-card-section class="q-pa-none">
        <iframe
          :src="src"
          style="width: 100%; height: calc(100vh - 190px); border: 0;"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const slugPath = computed(() => {
  const s = route.params.slug
  if (Array.isArray(s)) return s.join('/')
  return String(s || '')
})

const src = computed(() => `/viz/${slugPath.value}.html`)
const title = computed(() => slugPath.value.replaceAll('/', ' · '))
</script>
