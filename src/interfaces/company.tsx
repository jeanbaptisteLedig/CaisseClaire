interface ICompany {
	symbol: string
	name: string
	change: number
	volume: number
	description: string
	evolution: Array<number>
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
}

interface IResponseCompanies {
	meta: IMetaDataCompanies
	companies: ICompany[]
}

interface IResponseCompany {
	meta: IMetaDataCompany
	data: ICompany | undefined
}
