---
layout: page
title: Instica Style
pageClass: landing-page
---

<section class="hero-grid">
  <div class="hero-copy">
    <p class="eyebrow">Instica design system</p>
    <h1>
      Build cohesive experiences across every Instica touchpoint.
    </h1>
    <p class="lede">
      Instica Style blends code-ready tokens, editorial guidance, and lived product inspiration so squads can ship premium flows without reinventing foundations.
    </p>
    <div class="hero-cta">
      <a class="cta primary" href="/guide/core-principles">Open the system</a>
      <a class="cta ghost" href="https://github.com/instica/instica-style/tree/main/tokens">Sync the tokens</a>
    </div>
    <div class="hero-flags">
      <div>
        <span>01</span>
        Tight nav + footer hierarchy mirrors production IA.
      </div>
      <div>
        <span>02</span>
        Living tokens match web + iOS builds one-to-one.
      </div>
      <div>
        <span>03</span>
        Motion + depth cues lift cards, tables, and modals.
      </div>
    </div>
  </div>
  <div class="hero-visual">
    <div class="hero-panel tokens" data-depth="1">
      <header>
        <span>Color primitives</span>
        <code>tokens/colors.json</code>
      </header>
      <div class="swatch-row">
        <span style="--swatch:#1a73e8">Brand / 500</span>
        <span style="--swatch:#0f5bd8">Brand / 600</span>
        <span style="--swatch:#102030">Ink</span>
      </div>
      <div class="swatch-row">
        <span style="--swatch:#f7f8fa">Surface / 0</span>
        <span style="--swatch:#e6ecf5">Surface / 50</span>
        <span style="--swatch:#0f1418" class="light">Depth</span>
      </div>
    </div>
    <div class="hero-panel code" data-depth="2">
      <header>
        <span>Spacing scale</span>
        <code>tokens/spacing.json</code>
      </header>
      <pre><code>
"space.09": 36,
"space.10": 44,
"space.11": 56,
"grid": 8
      </code></pre>
    </div>
    <div class="hero-panel radar" data-depth="3">
      <p>Component health</p>
      <ul>
        <li><span>Form controls</span><strong>✅ ready</strong></li>
        <li><span>Cards + shells</span><strong>🛠 updates</strong></li>
        <li><span>Motion recipes</span><strong>🚧 drafting</strong></li>
      </ul>
    </div>
  </div>
</section>

<section class="pillars" id="pillars">
  <div class="section-head">
    <p class="eyebrow">System pillars</p>
    <h2>Layered storytelling built on our existing tokens.</h2>
    <p>Cards, docs, and inspiration share the same palette, typography roles, and spacing scale you ship with today—just expressed with more depth, gradients, and glassy surfaces.</p>
  </div>
  <div class="pillar-grid">
    <article>
      <h3>Tokens</h3>
      <p>Color, typography, and spacing JSON stay canonical. This refresh simply visualizes them with gradients, live previews, and contextual usage notes.</p>
      <a href="/guide/design-tokens">View token usage →</a>
    </article>
    <article>
      <h3>Components</h3>
      <p>Familiar component anatomy (buttons, tables, inputs) now showcases depth, elevated dividers, and hover motion so engineers can mirror the nuance.</p>
      <a href="/guide/components">Open component library →</a>
    </article>
    <article>
      <h3>Inspiration</h3>
      <p>Editorial storytelling combines screenshots, annotations, and motion cues to demonstrate how Instica experiences should feel end to end.</p>
      <a href="/inspiration/">Browse gallery →</a>
    </article>
  </div>
</section>

<section class="guide-rail" id="guide">
  <div class="guide-nav">
    <p class="eyebrow">Guided flow</p>
    <h2>Opinionated docs, Stripe-level polish.</h2>
    <ul>
      <li><a href="/guide/brand-foundation">Brand foundation</a></li>
      <li><a href="/guide/core-principles">Core principles</a></li>
      <li><a href="/guide/color-system">Color system</a></li>
      <li><a href="/guide/typography">Typography</a></li>
      <li><a href="/guide/spacing-layout">Spacing & layout</a></li>
      <li><a href="/guide/components">Components</a></li>
    </ul>
  </div>
  <div class="guide-body">
    <div class="doc-card">
      <h3>Quick start</h3>
      <ol>
        <li>Align on <strong>tone + hierarchy</strong> inside <a href="/guide/core-principles">Core Principles</a>.</li>
        <li>Pull the <a href="https://github.com/instica/instica-style/tree/main/tokens">token JSON</a> straight into SwiftUI, CSS, or Compose.</li>
        <li>Duplicate the <a href="https://www.figma.com/file/InsticaStyleKit/Instica-Design-System?type=design">Figma kit</a> from the Instica workspace.</li>
        <li>Cross-check builds against the <a href="https://github.com/instica/instica-style">Instica Style GitHub repo</a>.</li>
      </ol>
      <p class="note">Need a new pattern? Open an issue and attach your mock—every addition should ladder back into these pillars.</p>
    </div>
    <div class="doc-card">
      <h3>Story-driven docs</h3>
      <p>Each guide page now ships with a sticky nav, generous margins, and inline callouts for “when to use” guidance. Long-form storytelling reads like an editorial feature yet stays grounded in implementation checklists.</p>
      <ul class="doc-highlights">
        <li>Two-column layout with anchored overview</li>
        <li>Live component specs + motion recipes</li>
        <li>Accessibility, localization, and content notes</li>
      </ul>
    </div>
  </div>
</section>

<section class="tokens-lab" id="tokens">
  <div class="section-head">
    <p class="eyebrow">Tokens lab</p>
    <h2>Visualize palettes, type stacks, and spacing in real time.</h2>
  </div>
  <div class="lab-grid">
    <article>
      <header>
        <span>Color chips</span>
        <code>colors.json</code>
      </header>
      <div class="color-grid">
        <span style="--swatch:#1a73e8">Brand / 500</span>
        <span style="--swatch:#0f5bd8">Brand / 600</span>
        <span style="--swatch:#dcebff" class="ink">Brand / 050</span>
        <span style="--swatch:#102030" class="light">Ink / 900</span>
        <span style="--swatch:#5f6c75" class="light">Slate / 500</span>
        <span style="--swatch:#f7f8fa">Surface / base</span>
      </div>
      <p>Hover or tap to copy the token name and drop it into CSS vars, JS, or Swift enums.</p>
    </article>
    <article>
      <header>
        <span>Type scale</span>
        <code>typography.json</code>
      </header>
      <div class="type-specimen">
        <p class="large-title">Large Title · 34/41 Bold</p>
        <p class="title-one">Title 1 · 28/34 Semibold</p>
        <p class="body">Body · 17/22 Regular</p>
        <p class="caption">Caption · 12/16 Regular</p>
      </div>
      <p>Weights, tracking, and roles match the product tokens so marketing, product, and engineering speak the same typographic language.</p>
    </article>
    <article>
      <header>
        <span>Spacing map</span>
        <code>spacing.json</code>
      </header>
      <div class="spacing-map">
        <div data-label="Space 06" data-value="24"></div>
        <div data-label="Space 08" data-value="32"></div>
        <div data-label="Space 10" data-value="44"></div>
        <div data-label="Space 12" data-value="64"></div>
      </div>
      <p>The 8pt grid drives everything—from hero gutters to dense tables—keeping layouts snappy on desktop and mobile.</p>
    </article>
  </div>
</section>

<section class="inspiration-stack" id="inspiration">
  <div class="section-head">
    <p class="eyebrow">Real product inspiration</p>
    <h2>Story cards pair screenshots with annotations and motion.</h2>
    <p>Each example layers copy, gradients, and subtle blur to echo the production experience. Hover to see motion cues or dive into the full gallery for downloadable assets.</p>
  </div>
  <div class="inspiration-grid">
    <article>
      <h3>Inventory intelligence</h3>
      <p>Blurred panels reveal live metrics while annotations describe interaction decisions.</p>
      <button>View case study</button>
    </article>
    <article>
      <h3>Checkout flows</h3>
      <p>Layered cards with glass borders highlight how spacing tokens keep clarity under pressure.</p>
      <button>See flow</button>
    </article>
    <article>
      <h3>Ops tooling</h3>
      <p>Tables, filters, and alerts demonstrate motion choreography and color states.</p>
      <button>Open gallery</button>
    </article>
  </div>
</section>

<section class="landing-footer">
  <div>
    <h2>Contribute back to the system.</h2>
    <p>Submit issues, share prototypes, and help evolve Instica Style. Every improvement rolls into the docs, tokens, and kits you just explored.</p>
  </div>
  <div class="cta-group">
    <a class="cta primary" href="https://github.com/instica/instica-style">Open GitHub repo</a>
    <a class="cta ghost" href="/guide/design-tokens#contributing">Read contribution guide</a>
  </div>
</section>
