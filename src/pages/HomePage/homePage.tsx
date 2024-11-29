import Leaderboard from '../../components/Thread/leaderboard'
import Thread from '../../components/Thread/thread'

export default function HomePage() {
	const expertsLeaderboard: ILeaderboardList = [
		{ id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=3' },
		{ id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=5' },
		{ id: 3, name: 'Alice Brown', avatar: 'https://i.pravatar.cc/150?img=6' },
	]
	const stocksLeaderboard: ILeaderboardList = [
		{ id: 1, name: 'Apple', avatar: 'https://i.pravatar.cc/150?img=3' },
		{ id: 2, name: 'Starbucks', avatar: 'https://i.pravatar.cc/150?img=5' },
		{ id: 3, name: 'Adidas', avatar: 'https://i.pravatar.cc/150?img=6' },
	]
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
							Welcome, <span className="font-bold">Jean-Baptiste</span>
						</h2>
						<p className="text-gray-500">
							You have <span className="font-bold">7</span> stocks to share
						</p>
					</div>
				</div>
			</div>
			{/* Content Section */}
			<div className="flex flex-col sm:flex-row mt-4">
				<div className="w-full sm:w-2/3 px-4">
					<Thread />
				</div>
				<div className="w-full sm:w-1/3 px-4">
					<Leaderboard title="Experts Leaderboard" list={expertsLeaderboard} />
					<Leaderboard title="Stocks Leaderboard" list={stocksLeaderboard} />
				</div>
			</div>
		</div>
	)
}
