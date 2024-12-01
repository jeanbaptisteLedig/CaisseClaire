import { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { fetchStoriesData } from '../../services/api-services'

const Stories = () => {
	const [storiesData, setStoriesData] = useState<IStories>(fetchStoriesData())
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
						id="previousStories"
						role="button"
						type="button"
						aria-label="Previous Stories"
						onClick={prevStories}
						className="py-1 px-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-500 hover:via-indigo-500 hover:to-fuchsia-500"
						disabled={startIndex === 0}
					>
						<ArrowBackOutlinedIcon />
					</button>
					<button
						id="nextStories"
						role="button"
						type="button"
						aria-label="Next Stories"
						onClick={nextStories}
						className="py-1 px-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-500 hover:via-indigo-500 hover:to-fuchsia-500"
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
								<img
									src={story.image}
									alt={story.title}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							<div className="h-1/3 p-4 flex flex-col justify-between">
								<h1 className="text-lg font-bold text-gray-800">{story.title}</h1>
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
