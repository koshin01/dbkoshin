// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "dbkoshin";
export const SITE_DESCRIPTION = "koshin's homepage";

interface Image {
	src: string;
	alt: string;
}

interface Item {
	name: string;
	description: string;
	icon?: Image;
	contentUrl?: string;
}

export const MY_PROCUCTS: Item[] = [
	{
		name: "Blog",
		description: "My tech blog",
		icon: { src: "/coffee.png", alt: "Smile in a cup with coffee." },
		contentUrl: "https://blog.dbkoshin.com",
	},
	{
		name: "HAKUSHIKI",
		description: "AI chat bot on Discord",
		icon: {
			src: "/hakushiki.jpeg",
			alt: "Friendly robots smiling in futuristic spaces.",
		},
		contentUrl:
			"https://koshin01.notion.site/HAKUSHIKI-67268f66bf6744b4b0618a25a27e28c2",
	},
	{
		name: "DBoard",
		description: "BBS on blockchain",
		icon: { src: "/dboard.png", alt: "Unique black oval with capital D." },
		contentUrl: "https://dboard.dbkoshin.com",
	},
	{
		name: "WEBIII MOSHI",
		description: "Quiz app of Web3",
		icon: { src: "/webiii_moshi.png", alt: "Greek numeral 3." },
		contentUrl: "https://webiiimoshi.dbkoshin.com",
	},
];

export const MY_RECOMMENDS: Item[] = [
	{
		name: "Silicon Valley",
		description: "Recommended for who came here",
	},
	{
		name: "3 idiots",
		description: "Films I love",
	},
	{
		name: "\"Think different\"",
		description: "I love Apple, and sprits",
	},
    {
		name: "Yoasobi",
		description: "Star of our generation",
	},
];

export const MY_TECH_WORDS: Item[] = [
	{
		name: "Agile",
		description: "Especially Extreme Programming",
	},
	{
		name: "Blockchain",
		description: "Will my efforts be rewarded ??",
	},
];
