export const homeHTML = `
<section class="hero">
  <h1>KLGA</h1>
  <p class="tagline">Your practice companion. A full-featured metronome, guided training planner, habit tracker, and timing trainer built for musicians who take practice seriously.</p>
  <a href="#/metronome" class="cta-btn">Explore the Metronome</a>
</section>

<section class="features">
  <a href="#/metronome" class="feature-card">
    <h3>Metronome</h3>
    <p>BPM dial (20–300), 14 click sounds, flexible time signatures, accent patterns, and floating playback controls across the app's main tabs.</p>
  </a>

  <a href="#/tap-tempo" class="feature-card">
    <h3>Tap Tempo</h3>
    <p>Tap the screen to detect a tempo, then send it straight to the metronome and start playing instantly.</p>
  </a>

  <a href="#/training" class="feature-card">
    <h3>Training</h3>
    <p>Browse curated exercises, create custom goals, generate timed practice sessions, and track BPM progress.</p>
  </a>

  <a href="#/practice-calendar" class="feature-card">
    <h3>Practice Calendar</h3>
    <p>Track your practice days on a monthly grid. See your streak, sync across devices, and build consistency.</p>
  </a>

  <a href="#/dashboard" class="feature-card">
    <h3>Dashboard</h3>
    <p>Review practice consistency, streaks, calendar activity, BPM growth, and exercise progress.</p>
  </a>

  <a href="#/reference/gradual-muting" class="feature-card">
    <h3>Gradual Muting</h3>
    <p>A training mode that progressively silences beats until you maintain the rhythm on your own — no click needed.</p>
  </a>
</section>

<section class="getting-started">
  <h2>Get Started in Seconds</h2>
  <div class="steps">
    <div class="step">
      <div class="step-number">1</div>
      <p>Continue through Welcome, create an account, and sign in.</p>
    </div>
    <div class="step">
      <div class="step-number">2</div>
      <p>Choose your practice days, daily goal, and optional reminders.</p>
    </div>
    <div class="step">
      <div class="step-number">3</div>
      <p>Finish setup, then start with Metronome or build a session in Training.</p>
    </div>
  </div>
  <p><a href="#/onboarding">Read the setup guide</a></p>
</section>

<section class="getting-started">
  <h2>App Navigation</h2>
  <div class="mermaid">
graph TD
    Welcome["Welcome"] -->|"Continue"| Login["Login"]
    Login -->|"first account setup"| Setup["Set up your practice"]
    Setup -->|"Continue"| Home
    subgraph shell ["Bottom Navigation Bar"]
        Home["Home"]
        Metro["Metronome"]
        Tap["Tap Tempo"]
        Train["Training"]
        Dash["Dashboard"]
    end
    Metro -->|"Beats button"| Beats["Sound & Training"]
    Metro -->|"Music icon"| Notes["Notes & Subdivisions"]
    Train -->|"exercise card"| Details["Exercise Details"]
    Train -->|"planner action"| Planner["Session Planner"]
    Planner --> Preview["Session Preview"]
    Dash -->|"Consistency"| Cal["Practice Calendar"]
    Dash -->|"Skill & Performance"| Progress["BPM & Exercise Progress"]
    Home -->|"avatar"| Profile["Profile"]
    Home -->|"gear icon"| Settings["Settings"]
    Login -->|"sign in"| Home
  </div>
</section>
`;
