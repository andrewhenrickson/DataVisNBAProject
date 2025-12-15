<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="row items-center">
              <div class="col-12 col-md-6">
                <div class="text-h6">NBA Team Statistics</div>
                <div class="text-body2 text-grey-7 q-mt-xs">
                  These charts track team shooting efficiency and rebounding across the season.
                  Look for sustained trends rather than single-game spikes, compare teams by
                  toggling them on and off in the legend, and use the league-average view to see
                  which teams consistently outperform the rest of the NBA over time.
                </div>
              </div>
              <div class="col-12 col-md-6">
                <q-select
                  v-model="selectedPlot"
                  :options="plotOptions"
                  label="Select Statistic"
                  outlined
                  dense
                  emit-value
                  map-options
                />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="viz-container q-pa-none">
            <iframe
              :src="selectedPlot"
              :key="selectedPlot"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const plotOptions = [
  {
    label: 'Two Point Shooting % over Season',
    value: '/viz/league/team_comparison.html'
  },
  {
    label: 'Three Point Shooting % over Season',
    value: '/viz/league/team_comparison_three.html'
  },
  {
    label: 'Free Throw % over Season',
    value: '/viz/league/team_comparison_free_throw.html'
  },
  {
    label: 'Total Rebounds over Season',
    value: '/viz/league/team_comparison_total_rebounds.html'
  }
]

const selectedPlot = ref(plotOptions[0].value)
</script>

<style scoped>
.viz-container iframe {
  width: 100%;
  height: 650px;
  border: 0;
}
</style>