import { defineConfig } from 'vitepress'

declare const process: { env: Record<string, string | undefined> }

const base = process?.env?.GITHUB_PAGES ? '/instica-style/' : '/'

export default defineConfig({
	base,
	title: 'Instica Style',
	description: 'Unified design system for Instica surfaces',
	lang: 'en-US',
	lastUpdated: true,
	themeConfig: {
		logo: '/logo.png',
		nav: [
			{ text: 'Brand', link: '/guide/brand-foundation' },
			{ text: 'Guide', link: '/guide/core-principles' },
			{ text: 'Inspiration', link: '/inspiration/' },
			{ text: 'Tokens', link: '/guide/design-tokens#21-spacing-scale' }
		],
		sidebar: {
			'/guide/': [
				{
					text: 'Brand Foundation',
					items: [
						{ text: 'Logo & Usage', link: '/guide/logo' },
						{ text: 'Brand Playbook', link: '/guide/brand-foundation' },
						{ text: 'Core Principles', link: '/guide/core-principles' }
					]
				},
				{
					text: 'Design System',
					items: [
						{ text: 'Color System', link: '/guide/color-system' },
						{ text: 'Typography', link: '/guide/typography' },
						{ text: 'Spacing & Layout', link: '/guide/spacing-layout' },
						{ text: 'Icons', link: '/guide/icons' },
						{ text: 'Design Tokens', link: '/guide/design-tokens' }
					]
				},
				{
					text: 'Components',
					items: [
						{ text: 'UI Library', link: '/guide/components' },
						{ text: 'Forms & Inputs', link: '/guide/forms' },
						{ text: 'Buttons & Actions', link: '/guide/buttons' },
						{ text: 'Navigation', link: '/guide/navigation' },
						{ text: 'Data Display', link: '/guide/data-display' },
						{ text: 'Feedback & Overlays', link: '/guide/feedback-overlays' },
						{ text: 'Layout Patterns', link: '/guide/layout' },
						{ text: 'Authentication & Login', link: '/guide/authentication' },
						{ text: 'Error States & Feedback', link: '/guide/error-states' }
					]
				},
				{
					text: 'Guidelines',
					items: [
						{ text: 'Accessibility', link: '/guide/accessibility' },
						{ text: 'Motion & Animation', link: '/guide/motion' }
					]
				}
			],
			'/inspiration/': [
				{
					text: 'Inspiration',
					items: [{ text: 'Gallery', link: '/inspiration/' }]
				}
			]
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/instica' }
		],
		footer: {
			message: 'Built with tokens from instica-style/tokens',
			copyright: '© ' + new Date().getFullYear() + ' Instica'
		}
	}
})
