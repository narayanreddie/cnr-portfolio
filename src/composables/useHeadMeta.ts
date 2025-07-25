// src/composables/useHeadMeta.ts
import { useHead } from '@vueuse/head';

export const injectHeadMeta = () => {
	useHead({
		title: 'CNR | Front-End Developer',
		meta: [
			{
				name: 'description',
				content:
					'A Front-End Developer with 3 years of professional experience, dedicated to creating interactive, accessible, and responsive websites.',
			},
			{
				name: 'keywords',
				content: 'UI Developer, Frontend Developer, Software Developer',
			},
			{ name: 'author', content: 'CNR' },
			{ property: 'og:title', content: 'CNR | Front-End Developer' },
			{
				property: 'og:description',
				content: 'Interactive, accessible, and responsive websites.',
			},
			{ property: 'og:url', content: 'https://github.com/NARAYANAREDDY37' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:site_name', content: 'CNR Portfolio' },
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
		],
	});
};
