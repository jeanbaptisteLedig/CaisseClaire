import { createTheme } from '@mui/material/styles'

import BusinessIcon from '@mui/icons-material/Business'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { Outlet } from 'react-router-dom'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { AppTheme, Branding, Navigation } from '@toolpad/core'
import { Container, Stack } from '@mui/material'

function CustomProfilePicture() {
	return (
		<Stack direction="row">
			<img
				className="rounded-full w-10 h-10"
				src="https://avatars.githubusercontent.com/u/22798274?v=4"
				alt="myself"
			/>
		</Stack>
	)
}
export default function Layout() {
	const NAVIGATION: Navigation = [
		{
			segment: '',
			title: 'Home',
			icon: <HomeIcon />,
		},
		{
			segment: 'companies',
			title: 'Companies',
			icon: <BusinessIcon />,
		},
		{
			segment: 'orders',
			title: 'Orders',
			icon: <ShoppingBagIcon />,
		},
		{
			segment: 'investements',
			title: 'Investements',
			icon: <WorkOutlineIcon />,
		},
	]

	const THEME: AppTheme = createTheme({
		cssVariables: {
			colorSchemeSelector: 'data-toolpad-color-scheme',
		},
		colorSchemes: { light: true },
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 600,
				lg: 1200,
				xl: 1536,
			},
		},
	})

	const BRANDING: Branding = {
		logo: <img src="https://yeap.ai/wp-content/uploads/2023/05/yeap-black-text.svg" alt="Yeap Logo" />,
		title: '',
	}

	return (
		<AppProvider navigation={NAVIGATION} branding={BRANDING} theme={THEME}>
			<DashboardLayout defaultSidebarCollapsed slots={{ toolbarActions: CustomProfilePicture }}>
				<Container className="mt-4 xl:mt-8">
					<Outlet />
				</Container>
			</DashboardLayout>
		</AppProvider>
	)
}
