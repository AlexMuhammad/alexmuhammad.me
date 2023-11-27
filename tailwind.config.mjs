const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			extend: {
				fontFamily: {
				  sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
				  serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
				  mono: ['Space Mono', ...defaultTheme.fontFamily.mono]
				}
			  },
		},
	},
	plugins: [],
}
