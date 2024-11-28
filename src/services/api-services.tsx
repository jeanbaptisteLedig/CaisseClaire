const LIST_OF_COMPANIES: Array<ICompany> = [
	{
		symbol: 'AACG',
		name: 'Ata Creativity Global ADR',
	},
	{
		symbol: 'AADI',
		name: 'Aadi Biosciences Inc',
	},
	{
		symbol: 'AADR',
		name: 'Advisorshares Dorsey Wright ETF',
	},
	{
		symbol: 'AAL',
		name: 'American Airlines Gp',
	},
	{
		symbol: 'AACI',
		name: 'Armada Acquisition Corp I',
	},
	{
		symbol: 'AAOI',
		name: 'Applied Optoelect',
	},
	{
		symbol: 'AAON',
		name: 'Aaon Inc',
	},
	{
		symbol: 'AAPL',
		name: 'Apple Inc',
	},
	{
		symbol: 'AACIU',
		name: 'Armada Acquisition Corp I',
	},
	{
		symbol: 'AAWW',
		name: 'Atlas Air Ww',
	},
	{
		symbol: 'AAXJ',
		name: 'All Country Asia Ex Japan Ishares MSCI ETF',
	},
	{
		symbol: 'ABCB',
		name: 'Ameris Bancorp',
	},
	{
		symbol: 'ABCL',
		name: 'Abcellera Biologics Inc',
	},
	{
		symbol: 'ABCM',
		name: 'Abcam Plc ADR',
	},
	{
		symbol: 'ABEO',
		name: 'Abeona Therapeutics',
	},
	{
		symbol: 'ABGI',
		name: 'Abg Acquisition Corp I Cl A',
	},
	{
		symbol: 'ABIO',
		name: 'Arca Biopharma Inc',
	},
	{
		symbol: 'ABMD',
		name: 'Abiomed Inc',
	},
	{
		symbol: 'ABNB',
		name: 'Airbnb Inc Cl A',
	},
	{
		symbol: 'ABOS',
		name: 'Acumen Pharmaceuticals Inc',
	},
]

export const fetchCompanies = (limit: number): IResponseCompanies => {
	const response: IResponseCompanies = {
		meta: {
			status: 200,
			message: 'success',
			quoteLimit: 20,
		},
		companies: LIST_OF_COMPANIES,
	}
	return response
}

export const fetchCompany = (company: string): IResponseCompany => {
	const response: IResponseCompany = {
		meta: {
			status: 200,
			message: 'success',
			method: "GET company name and today's price by symbol",
			company: {
				symbol: 'AAPL',
				name: 'Apple Inc',
			},
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
