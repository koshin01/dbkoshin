// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export type Pages = "ROOT" | "BLOG";

export const SITE_TITLE: Record<Pages, string> = {
	ROOT: "Home | dbkoshin",
	BLOG: "Blog | dbkoshin",
};
export const SITE_DESCRIPTION: Record<Pages, string> = {
	ROOT: "koshin's homepage.",
	BLOG: "koshin's tech blog.",
};

export interface Image {
	src: string;
	alt: string;
}

export interface Item {
	name: string;
	description?: string;
	icon?: Image;
	contentUrl?: string;
}

export const MY_PROCUCTS: Item[] = [
	{
		name: "Blog",
		description: "Tech blog",
		icon: { src: "/coffee.png", alt: "Smile in a cup with coffee." },
		contentUrl: "/blog",
	},
	// {
	// 	name: "HAKUSHIKI",
	// 	description: "AI chat bot on Discord",
	// 	icon: {
	// 		src: "/hakushiki.jpeg",
	// 		alt: "Friendly robots smiling in futuristic spaces.",
	// 	},
	// 	contentUrl:
	// 		"https://koshin01.notion.site/HAKUSHIKI-67268f66bf6744b4b0618a25a27e28c2",
	// },
	{
		name: "DBoard",
		description: "BBS on blockchain",
		icon: { src: "/dboard.png", alt: "Unique black oval with capital D." },
		contentUrl: "https://dboard.dbkoshin.com",
	},
	{
		name: "WEBIII MOSHI",
		description: "Quiz of Web3",
		icon: { src: "/webiii_moshi.png", alt: "Greek numeral 3." },
		contentUrl: "https://webiiimoshi.dbkoshin.com",
	},
];

export const MY_RECOMMENDS: Item[] = [
	{
		name: "Silicon Valley",
		description: "I watch series many times",
		contentUrl: "https://www.hbo.com/silicon-valley",
	},
	{
		name: "3 idiots",
		description: "Films",
	},
];

export const MY_TECH_WORDS: Item[] = [
	{
		name: "Agile",
		description: "Especially Extreme Programming",
	},
	{
		name: "AI",
		description: "ChatGPT surprised me!",
	},
];

export const MY_LINKS: Item[] = [
	{
		name: "GitHub",
		contentUrl: "https://github.com/koshin01",
	},
	{
		name: "Hugging Face",
		contentUrl: "https://huggingface.co/koshin2001",
	},
	{
		name: "X",
		contentUrl: "https://x.com/koshin2001",
	},
	{
		name: "Wantedly",
		contentUrl: "https://www.wantedly.com/id/koshin2001",
	},
];

export const NOTIFICATIONS: Item[] = [
	{
		name: "🎉 Hello World !",
		description: "2024/09/01",
	},
];
