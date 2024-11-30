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
	const response: IResponseCompany = {
		meta: {
			status: 200,
			message: 'success',
			method: "GET company name and today's price by symbol",
			company: company,
		},
		data: {
			date: new Date(),
			open: 163.21,
			close: 165.35,
			high: 165.85,
			low: 163,
		},
	}
	return response
}

export const fetchPosts = (): IPosts => {
	return [
		{ id: 1, author: 'John Doe', content: 'Excited for the weekend!', date: 'Right now' },
		{ id: 2, author: 'Jane Smith', content: 'Learning React is fun!', date: '2 mins ago' },
	]
}

export const fetchExpertsLeaderboard = (): ILeaderboardList => {
	return [
		{ id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=3' },
		{ id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=5' },
		{ id: 3, name: 'Alice Brown', avatar: 'https://i.pravatar.cc/150?img=6' },
	]
}

export const fetchStocksLeaderboard = (): ILeaderboardList => {
	return [
		{
			id: 1,
			name: 'Apple',
			avatar: 'https://eu.ui-avatars.com/api/?name=Apple&size=150',
		},
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
