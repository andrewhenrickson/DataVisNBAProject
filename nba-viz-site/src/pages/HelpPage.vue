<template>
  <q-page padding>
    <div class="q-pa-md">
      <h3 class="text-h3 text-center q-mb-md">NBA Team Reference</h3>
      <p class="text-center text-subtitle1 q-mb-lg">
        Complete list of NBA team abbreviations and full names
      </p>

      <q-input
        v-model="search"
        placeholder="Search teams..."
        outlined
        clearable
        class="q-mb-md"
        style="max-width: 400px; margin: 0 auto;"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-table
        :rows="filteredTeams"
        :columns="columns"
        row-key="abbreviation"
        :filter="search"
        :pagination="{ rowsPerPage: 30 }"
        flat
        bordered
        class="team-table"
      >
        <template v-slot:body-cell-abbreviation="props">
          <q-td :props="props">
            <q-chip color="primary" text-color="white" size="md">
              {{ props.row.abbreviation }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell-conference="props">
          <q-td :props="props">
            <q-badge 
              :color="props.row.conference === 'Eastern' ? 'blue' : 'red'"
              :label="props.row.conference"
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const columns = [
  {
    name: 'abbreviation',
    required: true,
    label: 'Abbreviation',
    align: 'center',
    field: 'abbreviation',
    sortable: true
  },
  {
    name: 'fullName',
    required: true,
    label: 'Team Name',
    align: 'left',
    field: 'fullName',
    sortable: true
  },
  {
    name: 'city',
    label: 'City',
    align: 'left',
    field: 'city',
    sortable: true
  },
  {
    name: 'conference',
    label: 'Conference',
    align: 'center',
    field: 'conference',
    sortable: true
  }
]

const teams = [
  { abbreviation: 'ATL', fullName: 'Atlanta Hawks', city: 'Atlanta', conference: 'Eastern' },
  { abbreviation: 'BKN', fullName: 'Brooklyn Nets', city: 'Brooklyn', conference: 'Eastern' },
  { abbreviation: 'BOS', fullName: 'Boston Celtics', city: 'Boston', conference: 'Eastern' },
  { abbreviation: 'CHA', fullName: 'Charlotte Hornets', city: 'Charlotte', conference: 'Eastern' },
  { abbreviation: 'CHI', fullName: 'Chicago Bulls', city: 'Chicago', conference: 'Eastern' },
  { abbreviation: 'CLE', fullName: 'Cleveland Cavaliers', city: 'Cleveland', conference: 'Eastern' },
  { abbreviation: 'DAL', fullName: 'Dallas Mavericks', city: 'Dallas', conference: 'Western' },
  { abbreviation: 'DEN', fullName: 'Denver Nuggets', city: 'Denver', conference: 'Western' },
  { abbreviation: 'DET', fullName: 'Detroit Pistons', city: 'Detroit', conference: 'Eastern' },
  { abbreviation: 'GSW', fullName: 'Golden State Warriors', city: 'Golden State', conference: 'Western' },
  { abbreviation: 'HOU', fullName: 'Houston Rockets', city: 'Houston', conference: 'Western' },
  { abbreviation: 'IND', fullName: 'Indiana Pacers', city: 'Indiana', conference: 'Eastern' },
  { abbreviation: 'LAC', fullName: 'Los Angeles Clippers', city: 'Los Angeles', conference: 'Western' },
  { abbreviation: 'LAL', fullName: 'Los Angeles Lakers', city: 'Los Angeles', conference: 'Western' },
  { abbreviation: 'MEM', fullName: 'Memphis Grizzlies', city: 'Memphis', conference: 'Western' },
  { abbreviation: 'MIA', fullName: 'Miami Heat', city: 'Miami', conference: 'Eastern' },
  { abbreviation: 'MIL', fullName: 'Milwaukee Bucks', city: 'Milwaukee', conference: 'Eastern' },
  { abbreviation: 'MIN', fullName: 'Minnesota Timberwolves', city: 'Minnesota', conference: 'Western' },
  { abbreviation: 'NOP', fullName: 'New Orleans Pelicans', city: 'New Orleans', conference: 'Western' },
  { abbreviation: 'NYK', fullName: 'New York Knicks', city: 'New York', conference: 'Eastern' },
  { abbreviation: 'OKC', fullName: 'Oklahoma City Thunder', city: 'Oklahoma City', conference: 'Western' },
  { abbreviation: 'ORL', fullName: 'Orlando Magic', city: 'Orlando', conference: 'Eastern' },
  { abbreviation: 'PHI', fullName: 'Philadelphia 76ers', city: 'Philadelphia', conference: 'Eastern' },
  { abbreviation: 'PHX', fullName: 'Phoenix Suns', city: 'Phoenix', conference: 'Western' },
  { abbreviation: 'POR', fullName: 'Portland Trail Blazers', city: 'Portland', conference: 'Western' },
  { abbreviation: 'SAC', fullName: 'Sacramento Kings', city: 'Sacramento', conference: 'Western' },
  { abbreviation: 'SAS', fullName: 'San Antonio Spurs', city: 'San Antonio', conference: 'Western' },
  { abbreviation: 'TOR', fullName: 'Toronto Raptors', city: 'Toronto', conference: 'Eastern' },
  { abbreviation: 'UTA', fullName: 'Utah Jazz', city: 'Utah', conference: 'Western' },
  { abbreviation: 'WAS', fullName: 'Washington Wizards', city: 'Washington', conference: 'Eastern' }
]

const filteredTeams = computed(() => {
  if (!search.value) return teams
  
  const needle = search.value.toLowerCase()
  return teams.filter(team => 
    team.abbreviation.toLowerCase().includes(needle) ||
    team.fullName.toLowerCase().includes(needle) ||
    team.city.toLowerCase().includes(needle)
  )
})
</script>

<style scoped>
.team-table {
  max-width: 1000px;
  margin: 0 auto;
}
</style>