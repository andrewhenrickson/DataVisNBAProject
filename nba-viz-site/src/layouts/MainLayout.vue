<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-btn
          flat
          to="/"
          class='title'
          label='NBA Visualizations'
        />
        <q-btn 
          flat 
          label="Compare Statistics" 
          to="/vizpage" 
          class="compare"
        />
        <q-btn 
          flat 
          label="Game Comparison" 
          to="/gamecompare" 
          class="comparestat"
        />
        <q-btn
          flat 
          label="About" 
          to="/about" 
          class="about"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.bg-primary {
  background-color: #1e1e2f !important;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}

.about {
  font-size: 1rem;
  color: white;
  margin-left: 1rem;
}

.compare {
  font-size: 1rem;
  color: white;
  margin-left: auto;
}

.comparestat {
  font-size: 1rem;
  color: white;
  margin-left: 1rem;
}
</style>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
</script>