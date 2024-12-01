export const companies: ICompany[] = [
	{
		symbol: 'AAPL',
		name: 'Apple Inc.',
		change: +1.23,
		volume: 178.23,
		description: 'Apple conçoit des appareils électroniques, des logiciels et offre des services numériques.',
		evolution: [2.1, -3.2, 4.5, -1.0, 0.8, 3.4, -2.5, 1.6, -0.4, 2.2],
	},
	{
		symbol: 'MSFT',
		name: 'Microsoft Corporation',
		change: -0.45,
		volume: 335.56,
		description:
			'Microsoft développe des logiciels et propose des solutions cloud pour entreprises et particuliers.',
		evolution: [-1.3, 2.4, -0.9, 3.7, -2.1, 1.2, 0.5, -3.4, 4.0, -1.8],
	},
	{
		symbol: 'GOOGL',
		name: 'Alphabet Inc. (Google)',
		change: +0.76,
		volume: 138.67,
		description: 'Alphabet est spécialisée dans les technologies de recherche en ligne et la publicité numérique.',
		evolution: [3.6, -2.2, 1.4, -3.8, 0.9, 4.1, -1.7, 2.5, -0.3, 1.8],
	},
	{
		symbol: 'AMZN',
		name: 'Amazon.com Inc.',
		change: +2.01,
		volume: 116.34,
		description: 'Amazon est un leader mondial du commerce en ligne et des services cloud.',
		evolution: [2.2, -1.4, 0.6, 3.9, -2.7, 1.8, -0.5, 2.4, -3.3, 0.7],
	},
	{
		symbol: 'TSLA',
		name: 'Tesla Inc.',
		change: -0.89,
		volume: 243.89,
		description: 'Tesla conçoit et produit des véhicules électriques et des solutions énergétiques renouvelables.',
		evolution: [4.0, -3.5, 1.1, 2.3, -1.2, 0.4, -2.6, 3.8, -0.9, 2.7],
	},
	{
		symbol: 'NVDA',
		name: 'NVIDIA Corporation',
		change: +1.12,
		volume: 410.12,
		description:
			"NVIDIA est une entreprise spécialisée dans les cartes graphiques et les solutions d'intelligence artificielle.",
		evolution: [-0.8, 2.9, -1.3, 3.4, -3.2, 4.1, -0.6, 2.7, -2.4, 1.9],
	},
	{
		symbol: 'META',
		name: 'Meta Platforms Inc.',
		change: +0.58,
		volume: 293.45,
		description:
			'Meta développe des plateformes sociales comme Facebook, Instagram, et des solutions de réalité virtuelle.',
		evolution: [1.4, -2.5, 3.1, -0.7, 2.8, -3.0, 4.3, -1.6, 0.9, -2.1],
	},
	{
		symbol: 'INTC',
		name: 'Intel Corporation',
		change: -0.34,
		volume: 46.78,
		description: 'Intel conçoit et fabrique des semi-conducteurs et des processeurs informatiques.',
		evolution: [2.0, -1.7, 3.2, -0.6, 4.5, -2.3, 0.8, -3.1, 1.7, -0.9],
	},
	{
		symbol: 'CSCO',
		name: 'Cisco Systems Inc.',
		change: +0.89,
		volume: 51.34,
		description: 'Cisco fournit des équipements réseau et des solutions de cybersécurité.',
		evolution: [-2.1, 1.3, 3.4, -0.8, 2.6, -1.5, 4.0, -3.7, 0.5, -2.9],
	},
	{
		symbol: 'ADBE',
		name: 'Adobe Inc.',
		change: +1.03,
		volume: 538.12,
		description: 'Adobe est connu pour ses logiciels de création comme Photoshop et Acrobat.',
		evolution: [1.9, -3.0, 2.5, -1.4, 0.7, 3.8, -0.6, 4.2, -2.3, 1.1],
	},
]

export const posts: IPosts = [
	{
		id: 1,
		content: `The stock market showed mixed results today, with tech stocks leading the gains. 
			  It’s always fascinating to see how market sentiment shifts in reaction to global events.`,
		date: '5 mins ago',
		author: {
			id: '1',
			name: 'John Doe',
			email: 'john.doe@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?t=st=1732971144~exp=1732974744~hmac=8092f8fc0fd211b02a2d87a1fa8d2ab49ced2c07c57021df120db89d2b8b975c&w=1800',
		},
	},
	{
		id: 2,
		content: `I just finished reading a book on value investing. The principles of buying undervalued stocks and holding them long-term 
			  make so much sense in today’s volatile market.`,
		date: '15 mins ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 3,
		content: `Diversification is key. I’ve been adding more ETFs to my portfolio to balance out the risks of individual stocks. 
			  It’s amazing how much peace of mind it brings.`,
		date: '45 mins ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 4,
		content: `The Federal Reserve hinted at potential interest rate hikes. This could impact borrowing costs significantly, 
			  so I’m re-evaluating my investment strategy.`,
		date: '1 hour ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 5,
		content: `Cryptocurrency markets are bouncing back after last week’s dip. Bitcoin and Ethereum are seeing a lot of momentum, 
			  but I’m staying cautious given the volatility.`,
		date: '2 hours ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 6,
		content: `I’ve been exploring dividend stocks lately. The idea of earning passive income consistently over time 
			  is incredibly appealing for long-term wealth building.`,
		date: '6 hours ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 7,
		content: `Started a budget tracking app today. It’s shocking to see how small expenses add up over time. 
			  Tracking every dollar really makes a difference in saving.`,
		date: '1 day ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 8,
		content: `Gold prices are on the rise again, as investors seek safe havens amidst economic uncertainty. 
			  It’s a reminder of how important it is to hedge against inflation.`,
		date: '2 days ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 9,
		content: `I’ve been learning about real estate investing. The potential for cash flow and property appreciation 
			  makes it a powerful tool for building wealth.`,
		date: '3 days ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
	{
		id: 10,
		content: `Spent some time researching the impact of AI on financial markets. It’s incredible how technology is changing the way we trade and analyze data.`,
		date: '1 week ago',
		author: {
			id: '1',
			name: 'Jane Smith',
			email: 'jane.smith@email.fr',
			image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?t=st=1732971160~exp=1732974760~hmac=d401b269d87f753c730c75fdd53fb483ac6ed6049d3b024bcfcbb4df084b56c9&w=1800',
		},
	},
]

export const stories: IStories = [
	{
		id: 1,
		image: 'https://img.freepik.com/free-psd/economy-concept-with-golden-coins_23-2150607540.jpg?t=st=1732964269~exp=1732967869~hmac=7d962d7855caa83d974986757d68454b09fcf8ef461276b01d6e134a66d2679c&w=2000',
		title: 'Story 1',
		description: 'This is the description for Story 1.',
	},
	{
		id: 2,
		image: 'https://img.freepik.com/free-vector/orange-realistic-rocket-flying-into-space-illustration_548887-41.jpg?t=st=1732964231~exp=1732967831~hmac=a60b6ae71a2c4629841f3c3f4c02fc244807a1a63f46c28b043cc13a5c8d8b57&w=2000',
		title: 'Story 2',
		description: 'This is the description for Story 2.',
	},
	{
		id: 3,
		image: 'https://img.freepik.com/free-photo/hands-holding-red-heart-heartbeat-wave-family-health-care-concept-white-background-3d-illustration_56104-1547.jpg?t=st=1732964174~exp=1732967774~hmac=6164ff9f57dfb7da83f91252eacfb0fd9aa4a3f4c1dd366e51507aea8664768d&w=2000',
		title: 'Story 3',
		description: 'This is the description for Story 3.',
	},
	{
		id: 4,
		image: 'https://img.freepik.com/free-psd/essentials-business-icon-design_23-2151654852.jpg?t=st=1732964283~exp=1732967883~hmac=544bbb29477775c707c54f5c1702b8ff3d7cf093a38120a8ec76bfb49624759d&w=1800',
		title: 'Story 4',
		description: 'This is the description for Story 4.',
	},
	{
		id: 5,
		image: 'https://img.freepik.com/free-psd/3d-rendering-bitcoin-income-icon_23-2149390414.jpg?t=st=1732964305~exp=1732967905~hmac=52ab349271ae3ad098535330331799e96bb7fb701d87ae4ea694c1998b23b48f&w=1800',
		title: 'Story 5',
		description: 'This is the description for Story 5.',
	},
	{
		id: 6,
		image: 'https://img.freepik.com/free-psd/3d-rendering-buy-online-icon_23-2151563899.jpg?t=st=1732964267~exp=1732967867~hmac=abaadbc4aa51a32d145aebbd20e2faa5345e0a89ad8368618bef180cfa24c6f6&w=1800',
		title: 'Story 6',
		description: 'This is the description for Story 6.',
	},
	{
		id: 7,
		image: 'https://avatars.githubusercontent.com/u/22798274?v=4',
		title: 'Ledig Jean-Baptiste',
		description: 'This is the description for Story 7.',
	},
]

export const expertsLeaderboard: ILeaderboardList = [
	{
		id: 1,
		name: 'John Doe',
		avatar: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?t=st=1732970960~exp=1732974560~hmac=1b26c413166c83986ae57ae6180fcebf31c2d3749d9120c38d07642b71de9514&w=1800',
		description: '120% returns all time',
	},
	{
		id: 2,
		name: 'Jane Smith',
		avatar: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303093.jpg?t=st=1732971016~exp=1732974616~hmac=4d66b6ce52d0e860e3e5d4572d76bdf2804c5b8770899812c64f50234fe279f1&w=1800',
		description: '30% returns all time',
	},
	{
		id: 3,
		name: 'Alice Brown',
		avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?t=st=1732971044~exp=1732974644~hmac=3380a93d3fa1375f5117e73051052c56c4b86ea59913cb4035a766d3e55f2a55&w=1800',
		description: '175% returns all time',
	},
]

export const stocksLeaderboard: ILeaderboardList = [
	{
		id: 1,
		name: 'Apple',
		avatar: 'https://eu.ui-avatars.com/api/?name=Apple&size=150',
		description: '12 experts bought this stock',
	},
	{
		id: 2,
		name: 'Starbucks',
		avatar: 'https://eu.ui-avatars.com/api/?name=Starbucks&size=150',
		description: '21 experts bought this stock',
	},
	{
		id: 3,
		name: 'Adidas',
		avatar: 'https://eu.ui-avatars.com/api/?name=Adidas&size=150',
		description: '50 experts bought this stock',
	},
]
