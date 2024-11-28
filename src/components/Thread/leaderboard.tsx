export default function Leaderboard() {
	const users = [
		{ id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=3' },
		{ id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=5' },
		{ id: 3, name: 'Alice Brown', avatar: 'https://i.pravatar.cc/150?img=6' },
	]
	return (
		<div className="max-w-4xl mx-auto py-6">
			<h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
			<div className="space-y-4">
				{users.map((user) => (
					<div key={user.id} className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4">
						{/* Left Side: Avatar and User Info */}
						<div className="flex items-center space-x-4">
							<img className="w-12 h-12 rounded-full" src={user.avatar} alt={`${user.name}'s Avatar`} />
							<div>
								<p className="text-xl font-semibold">{user.name}</p>
								<p className="text-gray-500">Bonjour</p>
							</div>
						</div>

						{/* Right Side: Follow Button */}
						<span className="rounded-full items-center bg-slate-800 px-1.5 py-0.5 border border-transparent text-sm text-white transition-all shadow-sm">
							Follow
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
