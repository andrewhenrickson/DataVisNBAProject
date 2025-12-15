<template>
  <q-page class="q-pa-md">
      <!-- Plot 1: Trends -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Two Point Shooting Percentages vs Wins</div>
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
