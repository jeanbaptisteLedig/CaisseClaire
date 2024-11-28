import { createTheme } from '@mui/material/styles'

import BusinessIcon from '@mui/icons-material/Business'

import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import { Outlet } from 'react-router-dom'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { AppTheme, Branding, Navigation } from '@toolpad/core'

export default function Layout() {
	const NAVIGATION: Navigation = [
		{
			kind: 'header',
			title: 'Main items',
		},
		{
			segment: 'companies',
			title: 'Companies',
			icon: <BusinessIcon />,
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
		logo: <img src="https://yeap.ai/wp-content/uploads/2023/05/yeap-black-text.svg" alt="MUI logo" />,
		title: '',
	}

	return (
		<AppProvider navigation={NAVIGATION} branding={BRANDING} theme={THEME}>
			<DashboardLayout defaultSidebarCollapsed>
				<PageContainer>
					<Outlet />
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	)
}
