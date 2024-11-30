import { SidebarFooterProps } from '@toolpad/core/DashboardLayout'
import { useState, useMemo } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import {
	Account,
	AccountPreview,
	AccountPopoverFooter,
	SignOutButton,
	AccountPreviewProps,
} from '@toolpad/core/Account'
import { fetchConnectedUser } from '../../services/api-services'

function SidebarFooterAccountPopover() {
	const [userConnected, setUserConnected] = useState<IUser>(fetchConnectedUser())
	return (
		<div className="flex flex-col">
			<h1 className="text-sm mx-2 mt-1">Accounts</h1>
			<MenuList>
				<MenuItem
					key={userConnected.id}
					component="button"
					sx={{
						justifyContent: 'flex-start',
						width: '100%',
						columnGap: 2,
					}}
				>
					<ListItemIcon>
						<Avatar
							sx={{
								width: 32,
								height: 32,
								fontSize: '0.95rem',
								bgcolor: '#0ea5e9',
							}}
							src={userConnected.image ?? ''}
							alt={userConnected.name ?? ''}
						>
							{userConnected.name[0]}
						</Avatar>
					</ListItemIcon>
					<ListItemText
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							width: '100%',
						}}
						primary={userConnected.name}
						secondary={userConnected.email}
						primaryTypographyProps={{ variant: 'body2' }}
						secondaryTypographyProps={{ variant: 'caption' }}
					/>
				</MenuItem>
			</MenuList>
			<Divider />
			<AccountPopoverFooter>
				<SignOutButton />
			</AccountPopoverFooter>
		</div>
	)
}

function AccountSidebarPreview(props: AccountPreviewProps & { mini: boolean }) {
	const { handleClick, open, mini } = props
	return (
		<div className="flex flex-col p-0 overflow-hidden">
			<Divider />
			<AccountPreview variant={mini ? 'condensed' : 'expanded'} handleClick={handleClick} open={open} />
		</div>
	)
}

const createPreviewComponent = (mini: boolean) => {
	function PreviewComponent(props: AccountPreviewProps) {
		return <AccountSidebarPreview {...props} mini={mini} />
	}
	return PreviewComponent
}
export function SidebarFooterAccount({ mini }: SidebarFooterProps) {
	const PreviewComponent = useMemo(() => createPreviewComponent(mini), [mini])
	return (
		<Account
			slots={{
				preview: PreviewComponent,
				popoverContent: SidebarFooterAccountPopover,
			}}
			slotProps={{
				popover: {
					transformOrigin: { horizontal: 'left', vertical: 'bottom' },
					anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
					disableAutoFocus: true,
					slotProps: {
						paper: {
							elevation: 0,
							sx: {
								overflow: 'visible',
								filter: (theme) =>
									`drop-shadow(0px 2px 8px ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.32)'})`,
								mt: 1,
								'&::before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									bottom: 10,
									left: 0,
									width: 10,
									height: 10,
									bgcolor: 'background.paper',
									transform: 'translate(-50%, -50%) rotate(45deg)',
									zIndex: 0,
								},
							},
						},
					},
				},
			}}
		/>
	)
}
