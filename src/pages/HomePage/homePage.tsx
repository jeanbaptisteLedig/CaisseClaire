import Leaderboard from '../../components/Thread/leaderboard'
import Thread from '../../components/Thread/thread'
import { fetchExpertsLeaderboard, fetchStocksLeaderboard } from '../../services/api-services'

export default function HomePage() {
	return (
		<div>
			{/* Header Section */}
			<div className="flex items-center">
				<div className="flex items-center">
					<img
						className="w-12 h-12 rounded-full"
						src="https://avatars.githubusercontent.com/u/22798274?v=4"
						alt="User Avatar"
					/>
					<div className="ml-4">
						<h2 className="text-2xl font-semibold text-gray-900">
							Welcome,
							<span className="ml-1 inline-block gradient-text">Jean-Baptiste</span>
						</h2>

						<p className="text-gray-500">
							You have <span className="font-bold">7</span> featured stories to view
						</p>
					</div>
				</div>
			</div>
			{/* Content Section */}
			<div className="flex flex-col lg:flex-row mt-4">
				<div className="w-full lg:w-2/3 px-4">
					<Thread />
				</div>
				<div className="w-full lg:w-1/3 px-4">
					<Leaderboard title="Experts Leaderboard" list={fetchExpertsLeaderboard()} />
					<Leaderboard title="Stocks Leaderboard" list={fetchStocksLeaderboard()} />
				</div>
			</div>
		</div>
	)
}
