---
layout: page
title: Instica Style
pageClass: landing-page
---

<section class="hero shell">
	<div class="hero__copy">
		<p class="eyebrow">Instica design system</p>
		<h1>Documentation-first design language.</h1>
		<p class="lede">Concise, production-backed tokens and patterns for web, mobile, and ops surfaces. Built to read like documentation, not marketing splash.</p>
		<div class="hero__cta">
			<a class="cta primary" href="/guide/core-principles">Open the docs</a>
			<a class="cta ghost" href="https://github.com/instica/instica-style/tree/main/tokens">View tokens</a>
		</div>
		<div class="quick-links">
			<a href="/guide/design-tokens">Design tokens</a>
			<a href="/guide/components">Components</a>
			<a href="/guide/typography">Typography</a>
			<a href="/inspiration/">Inspiration</a>
		</div>
	</div>
</section>

<section class="docs-cards">
	<div class="track-card">
		<p class="eyebrow">Start here</p>
		<h2>Guide overview</h2>
		<p>How we name, space, and ship across Instica surfaces. Start with tone, then move into primitives.</p>
		<a href="/guide/core-principles">Read the guide →</a>
	</div>
	<div class="track-card">
		<p class="eyebrow">Tokens</p>
		<h2>JSON-first foundation</h2>
		<p>Colors, spacing, typography, elevation, motion, and states live in `/tokens` and sync into product builds.</p>
		<a href="/guide/design-tokens">Open tokens →</a>
	</div>
	<div class="track-card">
		<p class="eyebrow">Components</p>
		<h2>Retail-ready patterns</h2>
		<p>Navigation, doc shells, cards, and buttons mirror our production stack with guardrails and states.</p>
		<a href="/guide/components">Browse components →</a>
	</div>
</section>

<section class="tokens-stage" id="tokens">
	<div class="stage__intro">
		<p class="eyebrow">Token stage</p>
		<h2>Quick peek at color, type, and spacing.</h2>
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
				<p class="large-title">Display — 40 / 46 · Bold</p>
				<p class="title-one">Title 1 — 32 / 38 · Semibold</p>
				<p class="body">Body — 15 / 22 · Regular</p>
				<p class="caption">Caption — 12 / 16 · Regular</p>
			</div>
			<p>Editorial cadence references Anthropic’s hero typography but now stays inside the marketing Manrope stack.</p>
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

<section class="doc-highlights" id="guide">
	<div class="doc-highlight">
		<p class="eyebrow">Brand</p>
		<h3>Brand foundation</h3>
		<p>Voice, tone, iconography, and motion guardrails for Instica surfaces.</p>
		<a href="/guide/brand-foundation">Open brand foundation →</a>
	</div>
	<div class="doc-highlight">
		<p class="eyebrow">System</p>
		<h3>Spacing & layout</h3>
		<p>Grid, gutters, and density defaults for dashboards and mobile views.</p>
		<a href="/guide/spacing-layout">View spacing & layout →</a>
	</div>
	<div class="doc-highlight">
		<p class="eyebrow">Components</p>
		<h3>UI library</h3>
		<p>Buttons, navigation, inputs, and doc shells ready for product builds.</p>
		<a href="/guide/components">Browse UI library →</a>
	</div>
	<div class="doc-highlight">
		<p class="eyebrow">Inspiration</p>
		<h3>Production stories</h3>
		<p>Examples pulled from shipping flows to show tokens and patterns in context.</p>
		<a href="/inspiration/">See inspiration →</a>
	</div>
</section>

<section class="resource-bar">
	<div>
		<h3>Changelog & repo</h3>
		<p>Track updates, download tokens, and open issues directly from the GitHub repo.</p>
	</div>
	<div class="cta-group">
		<a class="cta primary" href="https://github.com/instica/instica-style">Open repo</a>
		<a class="cta ghost" href="https://github.com/instica/instica-style/releases">View changelog</a>
	</div>
</section>
