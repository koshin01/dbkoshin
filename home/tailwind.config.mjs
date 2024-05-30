/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			boxShadow: {
				neumorphism: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
			},
			backgroundImage: {
				convex: "linear-gradient(145deg, #ffffff, #fdfdfd)",
			},
		},
	},
	plugins: [],
};
