import { createTheme } from '@mui/material/styles'

import { useMemo, useState } from 'react'

import BusinessIcon from '@mui/icons-material/Business'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { Outlet } from 'react-router-dom'
import { AppProvider } from '@toolpad/core/react-router-dom'
import { AppTheme, Branding, Navigation, Session } from '@toolpad/core'
import { Container } from '@mui/material'

import { SidebarFooterAccount } from '../../components/Sidebar/sidebarFooterAccount'
import { fetchConnectedUser } from '../../services/api-services'

export default function Layout() {
	const [sessionData, setSessionData] = useState<Session | null>({ user: fetchConnectedUser() })
	const authentication = useMemo(() => {
		return {
			signIn: () => {
				setSessionData(sessionData)
			},
			signOut: () => {
				setSessionData(null)
			},
		}
	}, [])

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
		<AppProvider
			navigation={NAVIGATION}
			branding={BRANDING}
			theme={THEME}
			authentication={authentication}
			session={sessionData}
		>
			<DashboardLayout
				defaultSidebarCollapsed
				slots={{
					toolbarAccount: () => null,
					sidebarFooter: SidebarFooterAccount,
				}}
			>
				<Container className="mt-4 xl:mt-8">
					<Outlet />
				</Container>
			</DashboardLayout>
		</AppProvider>
	)
}
