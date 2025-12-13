---
title: Core Principles
outline: deep
---

# Core Principles

Instica’s interface should feel calm, credible, and focused on helping sellers move inventory faster. Each principle now anchors to the specific inspiration captures you shared so designers can map intent to execution.

## 1. Calm retail credibility (Anthropic + Oura hero)
- Borrow Anthropic’s editorial spacing: pair oversized headlines with generous white space and underline accents.
- Layer soft gradients like the Oura homepage to suggest premium hardware-level polish while keeping our JSON-driven colors.
- Remove ornamental chrome; if a module doesn’t support a task, archive it.

## 2. Inventory-first hierarchy (Apple hero)
- Follow Apple’s “product → copy → CTA” sequence: SKU thumbnail, status row, then the action stack.
- Primary information order: **Title → Condition → Price → Status & Actions**. Never break this order unless accessibility testing proves otherwise.
- Keep tables perfectly aligned so sellers can scan dozens of SKUs like Apple’s spec comparison grids.

## 3. One-hand ergonomics (Nike store)
- Nike’s women’s nav keeps key links within a compact vertical rhythm; emulate that by pinning Instica CTAs near thumbs and spacing rails 16–20px apart.
- Maintain 44×44pt minimum targets with 16px gutters, even when the UI switches to dense data mode.

## 4. Accessible by default (Meta docs)
- Meta’s developer docs pair color, iconography, and text. Mirror that redundancy: every status color gets a label, icon, or badge.
- Target WCAG AA minimum (AAA for text < 16pt). Provide semantic cues beyond color (aria labels, live-region updates, haptics).

## 5. Consistency over novelty (Oura developer portal)
- Oura’s API reference reuses a single split shell across endpoints. Adopt the same discipline—extend tokens/components first.
- If a net-new pattern is required, define its tokens (spacing, radius, elevation) before release so iOS and web can stay aligned.

## 6. Platform awareness (Nike + Apple parity)
- Keep SwiftUI-ready tokens for iOS, CSS variables for web, and Compose readiness in mind. Dynamic Type, RTL, and dark mode must be in the first mock, not a later pass.
- Navigation parity: if Nike’s menu pattern inspires a large-screen treatment, ensure the mobile equivalent respects one-hand ergonomics.

## 7. Story-first documentation (Meta + Oura docs)
- Doc pages should feel like developer portals: left rail for structure, sticky outline on the right, highlighted request/response panels.
- Blend marketing storytelling with spec detail—cards, callouts, and hero blocks preview the actual kit, then deep-dive into the tokens below.

Use this page as your “definition of done.” When uncertain, compare your layout to the reference captures and confirm it reinforces these principles.
