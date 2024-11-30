import { PageContainer } from '@toolpad/core'
import { useState } from 'react'

export default function Investements() {
	const [title, setTitle] = useState<string>('Investements')
	return (
		<PageContainer title={title}>
			<h1>👋 Hello World !</h1>
		</PageContainer>
	)
}
