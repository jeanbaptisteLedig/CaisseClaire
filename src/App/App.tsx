import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/layout'
import CompaniesPage from '../pages/CompaniesPage/companiesPage'
import HomePage from '../pages/HomePage/homePage'
import CompanyPage from '../pages/CompanyPage/companyPage'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="companies" element={<CompaniesPage />} />
				<Route path="company/:symbolId" element={<CompanyPage />} />
			</Route>
		</Routes>
	)
}
