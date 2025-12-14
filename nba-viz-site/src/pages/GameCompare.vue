<template>
  <q-page padding>
    <div class="q-pa-md">
      <h3 class="text-h3 text-center q-mb-lg">NBA Team Game Statistics Comparison</h3>
      
      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-4">
          <q-select
            v-model="selectedTeam"
            :options="teams"
            label="Select Team"
            outlined
            @update:model-value="loadGames"
          />
        </div>
        
        <div class="col-12 col-md-8">
          <q-select
            v-model="selectedGame"
            :options="gameOptions"
            label="Select Game"
            outlined
            :disable="!selectedTeam"
            option-label="label"
            option-value="value"
            emit-value
            map-options
          />
        </div>
      </div>

      <div v-if="selectedGame" class="viz-container">
        <iframe
          :src="`/viz/games/${selectedTeam}_${selectedGame}.html`"
          style="width: 100%; height: 700px; border: 1px solid #ddd;"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GameComparisonPage',
  
  setup() {
    const teams = [
      "ATL", "BKN", "BOS", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
      "HOU", "IND", "LAL", "LAC", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
      "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "UTA", "TOR", "WAS"
    ]
    
    const selectedTeam = ref(null)
    const selectedGame = ref(null)
    const gameOptions = ref([])
    
    const loadGames = async () => {
      selectedGame.value = null
      gameOptions.value = []
      
      if (!selectedTeam.value) return
      
      try {
        const response = await fetch('/viz/games/game-data.json')
        const data = await response.json()
        
        if (data[selectedTeam.value]) {
          gameOptions.value = data[selectedTeam.value].map(game => ({
            label: game.label,
            value: game.date
          }))
          
          // Optionally auto-select first game
          if (gameOptions.value.length > 0) {
            selectedGame.value = gameOptions.value[0].value
          }
        }
      } catch (error) {
        console.error('Error loading games:', error)
        gameOptions.value = []
      }
    }
    
    return {
      teams,
      selectedTeam,
      selectedGame,
      gameOptions,
      loadGames
    }
  }
}
</script>

<style scoped>
.viz-container {
  margin-top: 20px;
}
</style>