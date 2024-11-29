interface ICompany {
	symbol: string
	name: string
	change: Array<number>
	volume: string
}
interface IMetaData {
	status: number
	message: string
}
interface IMetaDataCompanies extends IMetaData {
	quoteLimit: number
}
interface IMetaDataCompany extends IMetaData {
	method: string
	company: ICompany
}
interface IData {
	date: Date
	open: number
	close: number
	high: number
	low: number
}

interface IResponseCompanies {
	meta: IMetaDataCompanies
	companies: ICompany[]
}

interface IResponseCompany {
	meta: IMetaDataCompany
	data: IData
}
