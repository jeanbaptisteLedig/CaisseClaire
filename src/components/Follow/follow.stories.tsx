import type { Meta, StoryObj } from '@storybook/react'

import Follow from './follow'

const meta = {
	component: Follow,
	decorators: [
		(Follow) => (
			<div style={{ margin: '3em' }}>
				<Follow />
			</div>
		),
	],
} satisfies Meta<typeof Follow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
