/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				instrument: ['Instrument Serif', 'serif'],
				jetbrains: ['Jetbrains Mono Variable', 'monospace'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
