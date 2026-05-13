export const homeHTML = `
<section class="hero">
  <h1>KLGA</h1>
  <p class="tagline">Your practice companion. A full-featured metronome, habit tracker, and timing trainer built for musicians who take practice seriously.</p>
  <a href="#/metronome" class="cta-btn">Explore the Metronome</a>
</section>

<section class="features">
  <a href="#/metronome" class="feature-card">
    <h3>Metronome</h3>
    <p>BPM dial (20–300), 14 click sounds, any time signature, accent patterns, and a visual beat indicator that pulses with your rhythm.</p>
  </a>

  <a href="#/tap-tempo" class="feature-card">
    <h3>Tap Tempo</h3>
    <p>Tap the screen to detect a tempo, then send it straight to the metronome and start playing instantly.</p>
  </a>

  <a href="#/practice-calendar" class="feature-card">
    <h3>Practice Calendar</h3>
    <p>Track your practice days on a monthly grid. See your streak, sync across devices, and build consistency.</p>
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
      <p>Create a free account with your email and sign in.</p>
    </div>
    <div class="step">
      <div class="step-number">2</div>
      <p>Open the Metronome tab and drag the BPM dial to set your tempo.</p>
    </div>
    <div class="step">
      <div class="step-number">3</div>
      <p>Press Play — the click starts and your practice time is tracked automatically.</p>
    </div>
  </div>
</section>

<section class="getting-started">
  <h2>App Navigation</h2>
  <div class="mermaid">
graph TD
    Login["Login"]
    subgraph shell ["Bottom Navigation Bar"]
        Home["Home"]
        Metro["Metronome"]
        Tap["Tap Tempo"]
        Cal["Practice Calendar"]
    end
    Metro -->|"Beats button"| Beats["Sound & Training"]
    Metro -->|"Music icon"| Notes["Notes & Subdivisions"]
    Home -->|"avatar"| Profile["Profile"]
    Home -->|"gear icon"| Settings["Settings"]
    Login -->|"sign in"| Home
  </div>
</section>
`;
