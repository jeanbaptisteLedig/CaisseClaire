import Leaderboard from './leaderboard'
import Posts from './posts'

export default function Thread() {
	return (
		<div className="flex">
			<div className="w-2/3  p-4">
				<Posts />
			</div>
			<div className="w-1/3  p-4">
				<Leaderboard />{' '}
			</div>
		</div>
	)
}
