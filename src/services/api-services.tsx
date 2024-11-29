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
			image: 'https://picsum.photos/id/147/200/300',
			title: 'Story 1',
			description: 'This is the description for Story 1.',
		},
		{
			id: 2,
			image: 'https://picsum.photos/id/151/200/300',
			title: 'Story 2',
			description: 'This is the description for Story 2.',
		},
		{
			id: 3,
			image: 'https://picsum.photos/id/164/200/300',
			title: 'Story 3',
			description: 'This is the description for Story 3.',
		},
		{
			id: 4,
			image: 'https://picsum.photos/id/184/200/300',
			title: 'Story 4',
			description: 'This is the description for Story 4.',
		},
		{
			id: 5,
			image: 'https://picsum.photos/id/210/200/300',
			title: 'Story 5',
			description: 'This is the description for Story 5.',
		},
		{
			id: 6,
			image: 'https://picsum.photos/id/210/200/300',
			title: 'Story 6',
			description: 'This is the description for Story 6.',
		},
		{
			id: 7,
			image: 'https://picsum.photos/id/210/200/300',
			title: 'Story 7',
			description: 'This is the description for Story 7.',
		},
	]
}
