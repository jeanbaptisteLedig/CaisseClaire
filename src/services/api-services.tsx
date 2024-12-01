import { companies, expertsLeaderboard, posts, stocksLeaderboard, stories } from './data'

export const fetchCompanies = (limit: number): IResponseCompanies => {
	const response: IResponseCompanies = {
		meta: {
			status: 200,
			message: 'success',
			quoteLimit: 20,
		},
		companies: companies.slice(0, limit),
	}
	return response
}

export const fetchCompany = (symbol: string): IResponseCompany => {
	const company = companies.find((element) => element.symbol === symbol)
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
	return posts
}

export const fetchExpertsLeaderboard = (): ILeaderboardList => {
	return expertsLeaderboard
}

export const fetchStocksLeaderboard = (): ILeaderboardList => {
	return stocksLeaderboard
}

export const fetchStoriesData = (): IStories => {
	return stories
}

export const fetchConnectedUser = (): IUser => {
	return {
		id: '1',
		name: 'Ledig Jean-Baptiste',
		image: 'https://avatars.githubusercontent.com/u/22798274?v=4',
		email: 'j.baptiste.ledig@icloud.com',
	}
}
