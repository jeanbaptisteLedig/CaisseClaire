import { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'

const storiesData = [
	{
		id: 1,
		image: 'https://picsum.photos/id/147/200/300',
		title: 'Story 1',
		description: 'This is the description for Story 1.',
	},
	{
		id: 2,
		image: 'https://picsum.photos/id/151/200/300',
		title: 'Story 2',
		description: 'This is the description for Story 2.',
	},
	{
		id: 3,
		image: 'https://picsum.photos/id/164/200/300',
		title: 'Story 3',
		description: 'This is the description for Story 3.',
	},
	{
		id: 4,
		image: 'https://picsum.photos/id/184/200/300',
		title: 'Story 4',
		description: 'This is the description for Story 4.',
	},
	{
		id: 5,
		image: 'https://picsum.photos/id/210/200/300',
		title: 'Story 5',
		description: 'This is the description for Story 5.',
	},
	{
		id: 6,
		image: 'https://picsum.photos/id/210/200/300',
		title: 'Story 6',
		description: 'This is the description for Story 6.',
	},
	{
		id: 7,
		image: 'https://picsum.photos/id/210/200/300',
		title: 'Story 7',
		description: 'This is the description for Story 7.',
	},
]

const Stories = () => {
	const [startIndex, setStartIndex] = useState(0)
	const visibleStoriesCount = 3
	const stepper = 1

	const nextStories = () => {
		setStartIndex((prevIndex) => (prevIndex + stepper < storiesData.length ? prevIndex + stepper : prevIndex))
	}

	const prevStories = () => {
		setStartIndex((prevIndex) => (prevIndex - stepper >= 0 ? prevIndex - stepper : prevIndex))
	}

	return (
		<div className="w-full max-w-4xl mx-auto mb-6 bg-white rounded-lg shadow-lg p-1">
			{/* Title and Navigation Container */}
			<div className="flex justify-between m-2">
				<h1 className="text-lg font-medium">Featured stories</h1>
				{/* Navigation Arrows */}
				<div className="space-x-2">
					<button
						onClick={prevStories}
						className="py-1 px-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={startIndex === 0}
					>
						<ArrowBackOutlinedIcon />
					</button>
					<button
						onClick={nextStories}
						className="py-1 px-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={startIndex + visibleStoriesCount >= storiesData.length}
					>
						<ArrowForwardOutlinedIcon />
					</button>
				</div>
			</div>
			{/* Stories Container */}
			<div className="flex overflow-hidden">
				{storiesData.slice(startIndex, startIndex + visibleStoriesCount).map((story) => (
					<div key={story.id} className="flex-shrink-0 w-1/3 p-2 transition-transform transform">
						<div className="flex flex-col h-[300px] border border-gray-300 rounded-lg overflow-hidden">
							<div className="h-2/3">
								<img src={story.image} alt={story.title} className="w-full h-full object-cover" />
							</div>
							<div className="h-1/3 p-4 flex flex-col justify-between">
								<h3 className="text-lg font-bold text-gray-800">{story.title}</h3>
								<p className="text-sm text-gray-600">{story.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Stories
