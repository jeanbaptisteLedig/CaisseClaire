import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { fetchPosts } from '../../services/api-services'
import FollowButton from '../Follow/follow'

export default function Posts() {
	const [posts, setPosts] = useState<IPosts>(fetchPosts())
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
					<div className="flex items-center justify-between">
						<span className="flex flex-row items-center">
							<img className="w-6 h-6 rounded-full mr-1" src={post.author.image} alt="User Avatar" />
							<p className="font-semibold pl-1">{post.author.name}</p>
							<p className="text-sm text-gray-500 pl-1">{post.date}</p>
						</span>
						<div>
							{/* Right Side: Follow Button */}
							<FollowButton />
							<button id="more" role="button" type="button" aria-label="More information">
								<MoreVertIcon />
							</button>
						</div>
					</div>
					<p className="mt-2 text-gray-800">{post.content}</p>
				</div>
			))}
		</div>
	)
}
