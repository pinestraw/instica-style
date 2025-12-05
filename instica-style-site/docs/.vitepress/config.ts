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
		logo: '/inspiration/sku-grid.png',
		nav: [
			{ text: 'Guide', link: '/guide/core-principles' },
			{ text: 'Inspiration', link: '/inspiration/' },
			{ text: 'Tokens', link: '/guide/color-system#neutral-base' }
		],
		sidebar: {
			'/guide/': [
				{
					text: 'Foundation',
					items: [
						{ text: 'Core Principles', link: '/guide/core-principles' },
						{ text: 'Color System', link: '/guide/color-system' },
						{ text: 'Typography', link: '/guide/typography' },
						{ text: 'Spacing & Layout', link: '/guide/spacing-layout' }
					]
				},
				{
					text: 'Components',
					items: [{ text: 'Components Library', link: '/guide/components' }]
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
