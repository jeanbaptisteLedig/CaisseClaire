import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined'

export default function NewPost() {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 mb-6">
			{/* Textarea input */}
			<textarea
				placeholder="What's on your mind?"
				className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
			/>
			<div className="flex justify-between items-center">
				{/* Button to add cotent */}
				<div className="space-x-1">
					<button id="bitcoin" role="button" type="button" aria-label="Bitcoin button">
						<CurrencyBitcoinOutlinedIcon />
					</button>
					<button id="photo" role="button" type="button" aria-label="Photo button">
						<InsertPhotoOutlinedIcon />
					</button>
					<button id="videocam" role="button" type="button" aria-label="Videocam button">
						<VideocamOutlinedIcon />
					</button>
				</div>
				{/* Button to post */}
				<button
					id="post"
					role="button"
					type="button"
					aria-label="Post"
					className="ml-auto px-6 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-800 hover:shadow-lg focus:outline-none"
				>
					Post
				</button>
			</div>
		</div>
	)
}
