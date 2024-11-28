import { useState } from 'react'
import Post from './post'

export default function Posts() {
	const [posts, setPosts] = useState<IPost[]>([
		{ id: 1, author: 'John Doe', content: 'Excited for the weekend!', date: 'Right now' },
		{ id: 2, author: 'Jane Smith', content: 'Learning React is fun!', date: '2 mins ago' },
	])
	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-4 mb-6">
				<textarea
					placeholder="What's on your mind?"
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<div className="flex justify-right">
					<button className="ml-auto px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none">
						Post
					</button>
				</div>
			</div>

			<div>
				{posts.map((post) => (
					<Post post={post} />
				))}
			</div>
		</>
	)
}
