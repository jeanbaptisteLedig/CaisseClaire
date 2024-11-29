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
					<CurrencyBitcoinOutlinedIcon />
					<InsertPhotoOutlinedIcon />
					<VideocamOutlinedIcon />
				</div>
				{/* Button to post */}
				<button className="ml-auto px-6 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 focus:outline-none">
					Post
				</button>
			</div>
		</div>
	)
}
