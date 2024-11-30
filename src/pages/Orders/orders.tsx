import { PageContainer } from '@toolpad/core'
import { useState } from 'react'

export default function Orders() {
	const [title, setTitle] = useState<string>('Orders')
	return (
		<PageContainer title={title}>
			<h1>👋 Hello World !</h1>
		</PageContainer>
	)
}
