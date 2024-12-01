import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Badge, IconButton } from '@mui/material'

export default function ToolbarActionsHeader() {
	return (
		<div>
			<IconButton type="button" aria-label="notifications">
				<Badge badgeContent={4} color="error">
					<NotificationsOutlinedIcon />
				</Badge>
			</IconButton>
		</div>
	)
}
