/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "var(--primary)",	
				"secondary": "var(--secondary)",
				"light": "var(--light)",
				"extra-light": "var(--extra-light)",
			}
		},
	},
	plugins: [],
}
