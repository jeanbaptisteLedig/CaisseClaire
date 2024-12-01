import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const Contact: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactFormInputs>()

	const onSubmit: SubmitHandler<IContactFormInputs> = (data) => {
		console.log(data)
		alert('Form sent successfully !')
	}

	return (
		<div className="min-h-full justify-center items-center flex flex-col lg:flex-row">
			{/* Left section */}
			<div className="relative flex-1">
				<img
					src="https://img.freepik.com/free-psd/3d-illustration-delivery-man-character-with-rotary-phone_23-2149507166.jpg?t=st=1733067688~exp=1733071288~hmac=631db2df6347b06f25a77aa25079fa7a7ea4e9ba2c97008cdea81189904f0dce&w=2000"
					alt="men with a phone"
					className="w-full h-full object-cover"
				/>
				<div className="h-20 absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center py-4">
					<p className="align-bottom text-lg font-semibold">We would be happy to help you</p>
				</div>
			</div>

			{/* Right section */}
			<div className="flex-1 p-6 flex items-center justify-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-md bg-white p-6 rounded-md shadow-md space-y-4"
				>
					<h2 className="text-2xl font-bold text-gray-800">Contact us</h2>

					{/* Name */}
					<div className="flex gap-4">
						<div className="flex-1">
							<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
								First name
							</label>
							<input
								type="text"
								id="firstName"
								{...register('firstName', {
									required: 'First name is mandatory.',
								})}
								className={`mt-1 block w-full p-2 border ${
									errors.firstName ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500`}
							/>
							{errors.firstName && (
								<p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
							)}
						</div>
						<div className="flex-1">
							<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								{...register('lastName', {
									required: 'Last name is mandatory.',
								})}
								className={`mt-1 block w-full p-2 border ${
									errors.lastName ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500`}
							/>
							{errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
						</div>
					</div>

					{/* Email */}
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							{...register('email', {
								required: 'Email is mandatory.',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Invalid email.',
								},
							})}
							className={`mt-1 block w-full p-2 border ${
								errors.email ? 'border-red-500' : 'border-gray-300'
							} rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500`}
						/>
						{errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
					</div>

					{/* Message */}
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-700">
							Message
						</label>
						<textarea
							id="message"
							{...register('message', { required: 'Message is mandatory.' })}
							rows={4}
							className={`mt-1 block w-full p-2 border ${
								errors.message ? 'border-red-500' : 'border-gray-300'
							} rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500`}
						></textarea>
						{errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
					</div>

					{/* Submit button */}
					<button
						type="submit"
						className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
