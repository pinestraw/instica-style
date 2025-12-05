---
title: Spacing & Layout
outline: deep
---

# Spacing & Layout

Instica spacing tokens keep content blocks tidy across form factors. Values live in `tokens/spacing.json`.

## Scale
| Token | Value | Usage |
| --- | --- | --- |
| `space.xs` | 4px | Micro gaps, hairlines |
| `space.sm` | 8px | Icon padding |
| `space.md` | 12px | Between labels + inputs |
| `space.lg` | 16px | Default block gap |
| `space.xl` | 24px | Card padding |
| `space.2xl` | 32px | Section spacing |
| `space.3xl` | 48px | Page gutters |

## Grid rules
- Base grid: 8px; align flex/grid layouts to multiples.
- Breakpoints: 375, 744, 1024, 1280.
- Card max width: 420px for list modules; 640px for detail views.

## Elevation
| Level | Usage | Specs |
| --- | --- | --- |
| Base | Page background | No shadow |
| Raised | Cards, popovers | 0 8px 24px rgba(25,32,36,0.08) |
| Floating | Modals, FAB | 0 16px 40px rgba(25,32,36,0.16) |

## Responsive heuristics
- Switch from cards → table layout after 1024px.
- Keep primary action pinned within thumb reach (< 88px from bottom) on mobile.
- Reserve at least `space.2xl` between stacked CTAs to avoid accidental taps.
