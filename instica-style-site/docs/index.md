---
layout: page
title: Instica Style
pageClass: landing-page
---

<section class="hero shell">
	<div class="hero__copy">
		<p class="eyebrow">Instica design system</p>
		<h1>The calm, retail-grade language for every Instica surface.</h1>
		<p class="lede">Inspired by Nike’s precision nav, Apple’s quiet hero layouts, Oura’s premium gradients, and Meta’s disciplined docs—yet grounded fully in Instica tokens.</p>
		<div class="hero__cta">
			<a class="cta primary" href="/guide/core-principles">Open the guide</a>
			<a class="cta ghost" href="https://github.com/instica/instica-style/tree/main/tokens">Download tokens</a>
		</div>
		<ul class="hero__points">
			<li>Apple-like hero hierarchy: product narrative → proof → CTA.</li>
			<li>Oura-inspired glass cards powered by `colors.json`.</li>
			<li>Meta-grade documentation shell with console previews.</li>
		</ul>
	</div>
	<div class="hero__visual">
		<div class="hero-card palette">
			<header>
				<span>Color primitives</span>
				<code>tokens/colors.json</code>
			</header>
			<div class="chips">
				<span style="--swatch:#1a73e8">Brand · 500</span>
				<span style="--swatch:#0f5bd8">Brand · 600</span>
				<span class="ink" style="--swatch:#0b1d33">Depth</span>
				<span style="--swatch:#f7f8fa">Surface</span>
			</div>
		</div>
		<div class="hero-card spacing">
			<header>
				<span>Spacing scale</span>
				<code>tokens/spacing.json</code>
			</header>
			<ul>
				<li><strong>Space 06</strong><span>24px</span></li>
				<li><strong>Space 08</strong><span>32px</span></li>
				<li><strong>Space 10</strong><span>44px</span></li>
				<li><strong>Grid</strong><span>8px</span></li>
			</ul>
		</div>
		<div class="hero-card status">
			<header>
				<span>System status</span>
			</header>
			<ul>
				<li><span>Tokens</span><strong>Synced</strong></li>
				<li><span>Components</span><strong>Updating</strong></li>
				<li><span>Motion recipes</span><strong>In draft</strong></li>
			</ul>
		</div>
	</div>
</section>

<section class="tracks">
	<div class="track-card">
		<p class="eyebrow">Tokens</p>
		<h2>JSON-first foundation</h2>
		<p>Colors, spacing, typography, elevation, motion, and state tokens live in `/tokens`. The Apple-like quiet hero look is simply those values layered with gradients.</p>
		<a href="/guide/design-tokens">View design tokens →</a>
	</div>
	<div class="track-card">
		<p class="eyebrow">Components</p>
		<h2>Retail-ready patterns</h2>
		<p>Buttons, navigation, doc shells, and inspiration cards mirror Nike’s mega-nav order plus Meta’s structural rigor.</p>
		<a href="/guide/components">Open component library →</a>
	</div>
	<div class="track-card">
		<p class="eyebrow">Inspiration</p>
		<h2>Production proof</h2>
		<p>Anthropic-style editorial storytelling pairs with Oura’s photography cues to show how Instica modules breathe.</p>
		<a href="/inspiration/">Browse inspiration →</a>
	</div>
</section>

<section class="tokens-stage" id="tokens">
	<div class="stage__intro">
		<p class="eyebrow">Token stage</p>
		<h2>See palette, type scale, and spacing in action.</h2>
	</div>
	<div class="stage__grid">
		<article>
			<header><span>Color chips</span><code>colors.json</code></header>
			<div class="color-grid">
				<span style="--swatch:#1a73e8">Brand / 500</span>
				<span style="--swatch:#0f5bd8">Brand / 600</span>
				<span style="--swatch:#dcebff">Brand / 050</span>
				<span class="ink" style="--swatch:#0f1418">Depth</span>
				<span style="--swatch:#5f6c75">Slate</span>
				<span style="--swatch:#f7f8fa">Surface</span>
			</div>
			<p>Copy token names directly into SwiftUI colors, CSS vars, or Compose themes.</p>
		</article>
		<article>
			<header><span>Type stack</span><code>typography.json</code></header>
			<div class="type-specimen">
				<p class="large-title">Display — 44 / 52 · Semibold</p>
				<p class="title-one">Title 1 — 32 / 40 · Semibold</p>
				<p class="body">Body — 16 / 24 · Regular</p>
				<p class="caption">Caption — 14 / 20 · Medium</p>
			</div>
			<p>Editorial cadence references Anthropic’s hero typography but stays inside our SF/Inter stack.</p>
		</article>
		<article>
			<header><span>Spacing map</span><code>spacing.json</code></header>
			<div class="spacing-map">
				<div data-label="Space 06" data-value="24"></div>
				<div data-label="Space 08" data-value="32"></div>
				<div data-label="Space 10" data-value="44"></div>
				<div data-label="Space 12" data-value="64"></div>
			</div>
			<p>Nike-style mega-nav columns, Apple hero gutters, and Meta doc rails all sit on this 8pt grid.</p>
		</article>
	</div>
</section>

<section class="doc-lab" id="guide">
	<div class="doc-shell">
		<aside>
			<p class="eyebrow">Docs stack</p>
			<nav>
				<a class="active" href="/guide/brand-foundation">Brand foundation</a>
				<a href="/guide/core-principles">Core principles</a>
				<a href="/guide/color-system">Color system</a>
				<a href="/guide/typography">Typography</a>
				<a href="/guide/spacing-layout">Spacing & layout</a>
				<a href="/guide/components">Components</a>
			</nav>
		</aside>
		<article>
			<p class="breadcrumb">Docs → Design tokens</p>
			<h2>Meta-level documentation polish.</h2>
			<p>Sticky nav, console previews, and callouts make every guide feel like a living developer portal.</p>
			<div class="console-panel">
				<span class="badge get">GET</span>
				<code>/inventory/bulk-update</code>
				<span class="badge error">422</span>
			</div>
		</article>
	</div>
	<div class="doc-notes">
		<div class="note-card">
			<h3>Quick start</h3>
			<ol>
				<li>Start in <a href="/guide/core-principles">Core Principles</a> to confirm tone.</li>
				<li>Sync JSON from GitHub into SwiftUI, CSS, or Compose.</li>
				<li>Grab the shared Figma kit in the Instica workspace.</li>
				<li>Ship with component QA checklists baked into docs.</li>
			</ol>
		</div>
		<div class="note-card">
			<h3>Story-driven docs</h3>
			<ul>
				<li>Sticky outline + left rail inspired by Meta.</li>
				<li>Console column mirrors the Oura developer portal.</li>
				<li>Editorial callouts echo Anthropic’s tone.</li>
			</ul>
		</div>
	</div>
</section>

<section class="inspiration-board" id="inspiration">
	<div class="section-head">
		<p class="eyebrow">Inspiration</p>
		<h2>Nike-level energy, Instica-level rigor.</h2>
		<p>Each story card layers photography, gradients, and annotations so ops, marketing, and product see how modules feel in production.</p>
	</div>
	<div class="inspiration-grid">
		<article>
			<header><span>Inventory intelligence</span><small>Live</small></header>
			<p>Blur overlays highlight KPI pivots, while callouts describe motion decisions.</p>
			<a href="/inspiration/">View case study →</a>
		</article>
		<article>
			<header><span>Checkout flows</span><small>New</small></header>
			<p>Layered cards mirror Nike’s seasonal hero rhythm with Instica spacing tokens.</p>
			<a href="/inspiration/">See flow →</a>
		</article>
		<article>
			<header><span>Ops console</span><small>Draft</small></header>
			<p>Meta-style doc shell plus Oura console panel show how dense data stays calm.</p>
			<a href="/inspiration/">Open gallery →</a>
		</article>
	</div>
</section>

<section class="cta-ribbon">
	<div>
		<h2>Contribute work that feels this intentional.</h2>
		<p>Raise a GitHub issue or drop a prototype—every improvement folds back into the shared tokens, docs, and kits.</p>
	</div>
	<div class="cta-group">
		<a class="cta primary" href="https://github.com/instica/instica-style">Open GitHub repo</a>
		<a class="cta ghost" href="/guide/design-tokens#contributing">Read contribution guide</a>
	</div>
</section>
