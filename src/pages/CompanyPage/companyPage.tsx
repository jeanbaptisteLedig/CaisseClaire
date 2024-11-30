import { PageContainer, useActivePage } from '@toolpad/core'

import { useParams } from 'react-router-dom'

export default function CompanyPage() {
	let { companyId } = useParams()

	const activePage = useActivePage() || { path: '', breadcrumbs: [] }

	const title = `Item ${companyId}`
	const path = `${activePage.path}/${companyId}`

	const breadcrumbs = [...activePage.breadcrumbs, { title, path }]

	return (
		<PageContainer title={title} breadcrumbs={breadcrumbs}>
			<h1>👋 Hello World : {companyId}</h1>
		</PageContainer>
	)
}
