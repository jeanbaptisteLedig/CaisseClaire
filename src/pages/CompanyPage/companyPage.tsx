import { LineChart } from '@mui/x-charts'
import { PageContainer, useActivePage } from '@toolpad/core'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { fetchCompany } from '../../services/api-services'

export default function CompanyPage() {
	let { companyId } = useParams()
	const [companyData, setCompanyData] = useState(fetchCompany(companyId || ''))

	const activePage = useActivePage() || { path: '', breadcrumbs: [] }

	const title = `${companyId}`
	const path = `${activePage.path}/${companyId}`
	const breadcrumbs = [...activePage.breadcrumbs, { title, path }]

	return (
		<PageContainer breadcrumbs={breadcrumbs}>
			<div className="mx-auto bg-white rounded-lg shadow-md p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					{companyData?.data?.name} ({companyData?.data?.symbol})
				</h1>
				<p className="text-gray-600 mb-4">{companyData?.data?.description}</p>
				<div className="grid grid-cols-2 gap-4 mb-6">
					<div>
						<h2 className="text-lg font-semibold text-gray-700">Actual price</h2>
						<span className="text-3xl font-bold text-blue-600">${companyData?.data?.volume}</span>
					</div>
					<div>
						<h2 className="text-lg font-semibold text-gray-700">Market capitalisation</h2>
						<span
							className={`text-xl font-medium ${companyData?.data?.change! > 0 ? 'text-emerald-500' : 'text-red-600'} text-right`}
						>
							{companyData?.data?.change}%
						</span>
					</div>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-700 mb-4">Stock price evolution</h2>
					<div className="bg-gray-50 p-4 rounded-lg shadow">
						<LineChart
							series={[
								{
									data: companyData.data?.evolution,
									area: true,
								},
							]}
							height={300}
						/>
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
