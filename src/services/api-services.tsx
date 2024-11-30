import { getData } from './data'

export const fetchCompanies = (limit: number): IResponseCompanies => {
	const response: IResponseCompanies = {
		meta: {
			status: 200,
			message: 'success',
			quoteLimit: 20,
		},
		companies: getData().slice(0, limit),
	}
	return response
}

export const fetchCompany = (symbol: string): IResponseCompany => {
	const company = getData().find((element) => element.symbol === symbol)
	let response: IResponseCompany = {
		meta: {
			status: 200,
			message: 'success',
			method: "GET company name and today's price by symbol",
		},
		data: company,
	}
	return response
}

export const fetchPosts = (): IPosts => {
	return [
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
}

export const fetchExpertsLeaderboard = (): ILeaderboardList => {
	return [
		{
			id: 1,
			name: 'John Doe',
			avatar: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?t=st=1732970960~exp=1732974560~hmac=1b26c413166c83986ae57ae6180fcebf31c2d3749d9120c38d07642b71de9514&w=1800',
		},
		{
			id: 2,
			name: 'Jane Smith',
			avatar: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303093.jpg?t=st=1732971016~exp=1732974616~hmac=4d66b6ce52d0e860e3e5d4572d76bdf2804c5b8770899812c64f50234fe279f1&w=1800',
		},
		{
			id: 3,
			name: 'Alice Brown',
			avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?t=st=1732971044~exp=1732974644~hmac=3380a93d3fa1375f5117e73051052c56c4b86ea59913cb4035a766d3e55f2a55&w=1800',
		},
	]
}

export const fetchStocksLeaderboard = (): ILeaderboardList => {
	return [
		{ id: 1, name: 'Apple', avatar: 'https://eu.ui-avatars.com/api/?name=Apple&size=150' },
		{ id: 2, name: 'Starbucks', avatar: 'https://eu.ui-avatars.com/api/?name=Starbucks&size=150' },
		{ id: 3, name: 'Adidas', avatar: 'https://eu.ui-avatars.com/api/?name=Adidas&size=150' },
	]
}

export const fetchStoriesData = (): IStories => {
	return [
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
}

export const fetchConnectedUser = (): IUser => {
	return {
		id: '1',
		name: 'Ledig Jean-Baptiste',
		image: 'https://avatars.githubusercontent.com/u/22798274?v=4',
		email: 'j.baptiste.ledig@icloud.com',
	}
}
