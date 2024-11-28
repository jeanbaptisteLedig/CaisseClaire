import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App/App'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</QueryClientProvider>
)
