<template>
  <q-page class="q-pa-lg">
    <div class="about-page">
      <!-- Header -->
      <header class="hero q-mb-xl">
        <div class="hero-title">
          <q-icon name="sports_basketball" size="2.25rem" class="text-primary q-mr-sm" />
          <div>
            <div class="title">About This Project</div>
            <div class="subtitle">
              An interactive NBA analytics dashboard for exploring team-level trends across seasons.
            </div>
          </div>
        </div>
      </header>

      <!-- At a glance -->
      <div class="row q-col-gutter-lg q-mb-lg">
        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="card-kicker">Coverage</div>
              <div class="card-value">2023–24 NBA Season</div>
              <div class="card-desc">Ten seasons of team statistics.</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="card-kicker">Scope</div>
              <div class="card-value">All NBA Teams</div>
              <div class="card-desc">League-wide comparisons and trends.</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="card-kicker">Interactivity</div>
              <div class="card-value">Hover + Filter</div>
              <div class="card-desc">Explore charts with tooltips and selectors.</div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Main content -->
      <div class="row q-col-gutter-lg">
        <!-- Purpose -->
        <div class="col-12 col-md-6">
          <q-card class="section-card">
            <q-card-section>
              <div class="section-title">
                <q-icon name="show_chart" class="q-mr-sm" />
                Purpose
              </div>

              <p class="body">
                This project visualizes key NBA team metrics over time so you can quickly spot patterns,
                compare teams, and build intuition for how styles of play evolve across seasons.
              </p>

              <p class="body q-mb-none">
                The goal is not just to show numbers, but to help answer questions like:
              </p>

              <ul class="bullets">
                <li>Which teams consistently improve or decline across a season?</li>
                <li>How do shooting efficiency and shot selection shift year to year?</li>
                <li>Which teams stand out as outliers on a given metric?</li>
              </ul>
              <p class="body q-mb-none">This project was created by Andrew Henrickson, Daniel Shi and Sam Lukas for
              the Data Visualization course at the College of William and Mary in Fall 2025, taught by Prof. Alam.</p>

            </q-card-section>
          </q-card>
        </div>

        <!-- Data + Build -->
        <div class="col-12 col-md-6">
          <q-card class="section-card">
            <q-card-section>
              <div class="section-title">
                <q-icon name="code" class="q-mr-sm" />
                Data and Implementation
              </div>

              <p class="body">
                The dataset covers team performance metrics from the 2014–15 season through 2023–24.
                We cleaned and transformed the data using <strong>Pandas</strong>, then built interactive
                visualizations with <strong>Plotly</strong> for smooth tooltips and dynamic exploration.
              </p>

              <p class="body q-mb-none">
                Our visualization style is inspired by basketball analytics creators such as
                <a
                  href="https://www.youtube.com/@JxmyHighroller"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >JxmyHighroller</a>,
                who make complex stats accessible through storytelling and clear visuals.
              </p>

              <q-separator class="q-my-md" />

              <div class="howto-title">How to use the site</div>
              <ul class="bullets q-mb-none">
                <li>Pick a metric from the dropdown on each visualization page.</li>
                <li>Hover points/lines to see exact values and team labels.</li>
                <li>Use comparisons to identify leaders, laggards, and trends.</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Creators -->
      <div class="creators q-mt-xl">
        <div class="creators-title">
          <q-icon name="group" class="q-mr-sm" />
          About the Creators
        </div>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="creator-card">
              <q-card-section class="creator-row">
                <q-avatar size="64px" color="orange-10" text-color="white">
                  <q-icon name="sports_basketball" />
                </q-avatar>
                <div>
                  <div class="creator-name">Daniel Shi</div>
                  <div class="creator-links">
                    <a class="link" href="#" target="_blank" rel="noopener">GitHub</a>
                    <span class="dot">•</span>
                    <a class="link" href="#" target="_blank" rel="noopener">LinkedIn</a>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card class="creator-card">
              <q-card-section class="creator-row">
                <q-avatar size="64px" color="indigo-10" text-color="white">
                  <q-icon name="sports_basketball" />
                </q-avatar>
                <div>
                  <div class="creator-name">Andrew Henrickson</div>
                  <div class="creator-links">
                    <a class="link" href="#" target="_blank" rel="noopener">GitHub</a>
                    <span class="dot">•</span>
                    <a class="link" href="#" target="_blank" rel="noopener">LinkedIn</a>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
            <div class="col-12 col-md-6">
              <q-card class="creator-card">
                <q-card-section class="creator-row">
                  <q-avatar size="64px" color="blue-10" text-color="white">
                    <q-icon name="sports_basketball" />
                  </q-avatar>
                  <div>
                    <div class="creator-name">Sam Lukas</div>
                    <div class="creator-links">
                      <a class="link" href="#" target="_blank" rel="noopener">GitHub</a>
                      <span class="dot">•</span>
                      <a class="link" href="#" target="_blank" rel="noopener">LinkedIn</a>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// no script needed
</script>

<style scoped>
.about-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  color: #1f2937;
  max-width: 1100px;
  margin: 0 auto;
}

.hero-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 2.25rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.subtitle {
  margin-top: 6px;
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.5;
  max-width: 70ch;
}

.info-card,
.section-card {
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.info-card:hover,
.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(0,0,0,0.10);
}

.card-kicker {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.card-value {
  margin-top: 6px;
  font-size: 1.4rem;
  font-weight: 700;
}

.card-desc {
  margin-top: 6px;
  color: #6b7280;
  line-height: 1.6;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--q-primary);
  margin-bottom: 12px;
}

.body {
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0 0 12px 0;
  max-width: 75ch;
}

.howto-title {
  font-weight: 700;
  margin-bottom: 8px;
}

.bullets {
  margin: 10px 0 0 18px;
  color: #374151;
  line-height: 1.8;
}

.link {
  color: var(--q-primary);
  font-weight: 700;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.creators-title {
  display: flex;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--q-primary);
  margin-bottom: 16px;
}

.creator-card {
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}

.creator-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.creator-name {
  font-weight: 700;
  font-size: 1.15rem;
}

.creator-role {
  color: #6b7280;
}

.creator-links {
  margin-top: 6px;
}

.dot {
  margin: 0 6px;
  color: #9ca3af;
}
</style>
