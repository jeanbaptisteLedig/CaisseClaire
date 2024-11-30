import { useQuery } from '@tanstack/react-query'
import { fetchCompanies } from '../../services/api-services'
import { useEffect, useState } from 'react'
import Grid from '../../components/List/grid'
import { PageContainer } from '@toolpad/core'

function CompaniesPage() {
	const [title, setTitle] = useState<string>('Stocks Companies')
	const [limit, setLimit] = useState<number>(10)
	const [companies, setCompanies] = useState<Array<ICompany>>([])

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['todos'],
		queryFn: () => fetchCompanies(limit),
	})

	useEffect(() => {
		if (isSuccess) {
			setCompanies(data.companies)
		}
	}, [isSuccess, data])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError && error instanceof Error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<PageContainer title={title}>
			<Grid />
		</PageContainer>
	)
}

export default CompaniesPage
