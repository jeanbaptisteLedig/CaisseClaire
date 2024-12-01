import { SidebarFooterProps } from '@toolpad/core/DashboardLayout'
import { useState, useMemo } from 'react'
import Divider from '@mui/material/Divider'
import {
	Account,
	AccountPreview,
	AccountPopoverFooter,
	SignOutButton,
	AccountPreviewProps,
} from '@toolpad/core/Account'
import GitHubIcon from '@mui/icons-material/GitHub'
import { fetchConnectedUser } from '../../services/api-services'

function SidebarFooterAccountPopover() {
	const [userConnected, setUserConnected] = useState<IUser>(fetchConnectedUser())
	return (
		<div className="flex flex-col">
			<h1 className="mx-2 my-1 text-sm">Accounts</h1>
			<div className="mx-2 my-1">
				<div className="flex items-center">
					<img
						className="w-8 h-8 rounded-full"
						src={userConnected.image ?? ''}
						alt={userConnected.name ?? ''}
					/>
					<div className="ml-2">
						<span className="flex justify-normal">
							<p className="text-base font-semibold mr-2">{userConnected.name}</p>
							<a href="https://github.com/jeanbaptisteLedig">
								<GitHubIcon fontSize="small" />
							</a>
						</span>
						<p className="text-sm text-gray-500">
							<a href={`mailto:${userConnected.email}`}>{userConnected.email}</a>
						</p>
					</div>
				</div>
			</div>
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
