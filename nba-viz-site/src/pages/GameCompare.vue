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
            clearable
          />
        </div>
      </div>

      <div v-if="selectedTeam && selectedGame" class="viz-container">
        <div ref="plotDiv" style="width: 100%; height: 600px;"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Plotly from 'plotly.js-dist'

const teams = [
  "ATL", "BKN", "BOS", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
  "HOU", "IND", "LAL", "LAC", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
  "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "UTA", "TOR", "WAS"
]

const selectedTeam = ref(null)
const selectedGame = ref(null)
const gameOptions = ref([])
const plotDiv = ref(null)
const allGamesData = ref({})

onMounted(async () => {
  // Load all game data once
  const response = await fetch('/viz/games/all-games-data.json')
  allGamesData.value = await response.json()
})

const loadGames = () => {
  selectedGame.value = null
  gameOptions.value = []
  
  if (!selectedTeam.value || !allGamesData.value[selectedTeam.value]) return
  
  const teamGames = allGamesData.value[selectedTeam.value]
  gameOptions.value = Object.keys(teamGames).map(date => {
    const game = teamGames[date]
    const homeAway = game.team_stats.home === 1 ? 'vs' : '@'
    return {
      label: `${date} - ${homeAway} ${game.opponent}`,
      value: date
    }
  })
  
  if (gameOptions.value.length > 0) {
    selectedGame.value = gameOptions.value[0].value
  }
}

watch([selectedTeam, selectedGame], () => {
  if (!selectedTeam.value || !selectedGame.value) return
  
  const gameData = allGamesData.value[selectedTeam.value]?.[selectedGame.value]
  if (!gameData) return
  
  renderPlot(gameData)
})

const renderPlot = (gameData) => {
  const categories = ['2-Point FG%', '3-Point FG%', 'Free Throw %']
  const teamValues = [
    gameData.team_stats['FG2%'],
    gameData.team_stats['FG3%'],
    gameData.team_stats['FT%']
  ]
  const opponentValues = [
    gameData.opponent_stats['FG2%'],
    gameData.opponent_stats['FG3%'],
    gameData.opponent_stats['FT%']
  ]
  
  const data = [
    {
      name: gameData.team,
      x: categories,
      y: teamValues,
      text: teamValues.map(v => `${(v * 100).toFixed(1)}%`),
      textposition: 'auto',
      type: 'bar'
    },
    {
      name: gameData.opponent,
      x: categories,
      y: opponentValues,
      text: opponentValues.map(v => `${(v * 100).toFixed(1)}%`),
      textposition: 'auto',
      type: 'bar'
    }
  ]
  
  const teamResult = gameData.team_stats.win === 1 ? 'W' : 'L'
  const opponentResult = gameData.opponent_stats.win === 1 ? 'W' : 'L'
  const homeAway = gameData.team_stats.home === 1 ? 'vs' : '@'
  
  const layout = {
    title: `Game Statistics - ${gameData.date}<br>` +
           `${gameData.team} ${gameData.team_stats.points} ${homeAway} ${gameData.opponent} ${gameData.opponent_stats.points} ` +
           `(${gameData.team}: ${teamResult}, ${gameData.opponent}: ${opponentResult})`,
    xaxis: { title: 'Statistics' },
    yaxis: { title: 'Value', tickformat: '.0%' },
    barmode: 'group',
    height: 600
  }
  
  Plotly.newPlot(plotDiv.value, data, layout)
}
</script>

<style scoped>
.viz-container {
  margin-top: 20px;
}
</style>