<template>
  <q-page class="q-pa-md">
      <!-- Plot 1: Trends -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Two Point Shooting Percentages vs Wins</div>
            <div class="text-body2 text-grey-7 q-mt-xs">
              This chart shows how interior scoring efficiency relates to team success.
              Look for whether teams with higher two-point percentages tend to cluster at
              higher win totals, and note any outliers that win despite average efficiency.
            </div>
          </q-card-section>
          <q-card-section class="twopointshooting q-pa-none">
            <iframe
              src="/viz/league/nba_team_wins_vs_2pt_shooting.html"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Plot 2: Offensive Rating -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Three Point Shooting Percentages vs Wins</div>
            <div class="text-body2 text-grey-7 q-mt-xs">
              This visualization highlights the relationship between perimeter shooting and
              overall team performance. Pay attention to how tightly wins track three-point
              efficiency and whether elite shooting teams consistently translate accuracy
              into victories.
            </div>
          </q-card-section>
          <q-card-section class="threepointshooting q-pa-none">
            <iframe
              src="/viz/league/nba_team_wins_vs_3pt_shooting.html"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Plot 3: True Shooting -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Free Throw Shooting Percentages vs Wins</div>
            <div class="text-body2 text-grey-7 q-mt-xs">
              Free throw percentage reflects consistency and execution rather than shot
              creation. Use this chart to see whether strong free-throw shooting alone is
              sufficient to drive wins, or if its impact appears secondary compared to
              other offensive factors.
            </div>
          </q-card-section>
          <q-card-section class="freethrowshooting q-pa-none">
            <iframe
              src="/viz/league/nba_team_wins_vs_ft_shooting.html"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Plot 4: Placeholder for additional visualization -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Rebounds vs Wins</div>
            <div class="text-body2 text-grey-7 q-mt-xs">
              Rebounding reflects control of possessions on both ends of the floor.
              Examine whether teams that dominate the glass tend to win more games, and
              identify teams that succeed despite average rebounding through other strengths.
            </div>
          </q-card-section>
          <q-card-section class="rebounds q-pa-none">
            <iframe
              src="/viz/league/nba_team_wins_vs_rebounds.html"
            />
          </q-card-section>
        </q-card>
      </div>
  </q-page>
</template>

<style scoped>
.twopointshooting iframe {
  width: 200%;
  margin-left: 20%;
  height: 600px;
  border: 0;
} 

.threepointshooting iframe{
  width: 200%;
  margin-left: 20%;
  height: 600px;
  border: 0;
}

.freethrowshooting iframe{
  width: 200%;
  margin-left: 20%;
  height: 600px;
  border: 0;
}


.rebounds iframe{
  width: 200%;
  margin-left: 20%;
  height: 600px;
  border: 0;
}
</style>


<script setup>
//
</script>
