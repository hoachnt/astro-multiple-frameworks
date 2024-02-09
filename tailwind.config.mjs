const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				"navbar-height": "var(--navbar-height)"
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()]
}
