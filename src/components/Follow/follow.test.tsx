import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FollowButton from '../../components/Follow/follow'

describe('FollowButton', () => {
	it('renders correctly with the text "Follow"', () => {
		render(<FollowButton />)
		const button = screen.getByRole('button', { name: /follow/i })
		expect(button).toBeInTheDocument()
		expect(button).toHaveAttribute('aria-label', 'Follow')
		expect(button).toHaveClass('bg-sky-700')
	})
})
