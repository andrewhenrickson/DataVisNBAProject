<template>
  <q-page padding>
    <div class="q-pa-md">
      <h3 class="text-h3 text-center q-mb-lg">NBA Team Game Statistics Comparison</h3>
      <p class="text-center text-body1 q-mb-lg" style="color: #6b7280; max-width: 600px; margin-left: auto; margin-right: auto;">
        Select any team and choose from their games to view a detailed breakdown of shooting statistics for that matchup. Compare your team's performance against their opponent across key metrics.
      </p>
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

const teamNames = {
  'ATL': 'Atlanta Hawks',
  'BKN': 'Brooklyn Nets',
  'BOS': 'Boston Celtics',
  'CHA': 'Charlotte Hornets',
  'CHI': 'Chicago Bulls',
  'CLE': 'Cleveland Cavaliers',
  'DAL': 'Dallas Mavericks',
  'DEN': 'Denver Nuggets',
  'DET': 'Detroit Pistons',
  'GSW': 'Golden State Warriors',
  'HOU': 'Houston Rockets',
  'IND': 'Indiana Pacers',
  'LAL': 'Los Angeles Lakers',
  'LAC': 'Los Angeles Clippers',
  'MEM': 'Memphis Grizzlies',
  'MIA': 'Miami Heat',
  'MIL': 'Milwaukee Bucks',
  'MIN': 'Minnesota Timberwolves',
  'NOP': 'New Orleans Pelicans',
  'NYK': 'New York Knicks',
  'OKC': 'Oklahoma City Thunder',
  'ORL': 'Orlando Magic',
  'PHI': 'Philadelphia 76ers',
  'PHX': 'Phoenix Suns',
  'POR': 'Portland Trail Blazers',
  'SAC': 'Sacramento Kings',
  'SAS': 'San Antonio Spurs',
  'UTA': 'Utah Jazz',
  'TOR': 'Toronto Raptors',
  'WAS': 'Washington Wizards'
}

const teamslist = Object.keys(teamNames).map(abbr => ({
  label: `${abbr} - ${teamNames[abbr]}`,
  value: abbr
}))
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
  
  const teamWon = gameData.team_stats.win === 1
  const homeAway = gameData.team_stats.home === 1 ? 'vs' : '@'
  const winner = teamWon ? gameData.team : gameData.opponent
  
  const data = [
    {
      name: `${gameData.team}${teamWon ? '' : ''}`,
      x: categories,
      y: teamValues,
      text: teamValues.map(v => `${(v * 100).toFixed(1)}%`),
      textposition: 'auto',
      type: 'bar',
      marker: {
        color: teamWon ? '#21BA45' : '#C10015'
      }
    },
    {
      name: `${gameData.opponent}${!teamWon ? '' : ''}`,
      x: categories,
      y: opponentValues,
      text: opponentValues.map(v => `${(v * 100).toFixed(1)}%`),
      textposition: 'auto',
      type: 'bar',
      marker: {
        color: !teamWon ? '#21BA45' : '#C10015'
      }
    }
  ]
  
  const teamResult = gameData.team_stats.win === 1 ? 'W' : 'L'
  const opponentResult = gameData.opponent_stats.win === 1 ? 'W' : 'L'
  
  const layout = {
    title: {
      text: `Game Statistics - ${gameData.date}<br>` +
            `${gameData.team} ${gameData.team_stats.points} ${homeAway} ${gameData.opponent} ${gameData.opponent_stats.points}<br>` +
            `<b style="color: #21BA45; font-size: 16px;">WINNER: ${winner}</b>`,
      font: { size: 18 }
    },
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