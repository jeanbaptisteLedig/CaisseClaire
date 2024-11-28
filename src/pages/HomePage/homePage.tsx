import Thread from '../../components/Thread/thread'

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
							Welcome, <span className="font-bold">Jean-Baptiste</span>
						</h2>
						<p className="text-gray-500">
							You have <span className="font-bold">7</span> stocks to share
						</p>
					</div>
				</div>
			</div>
			<Thread />
		</div>
	)
}
