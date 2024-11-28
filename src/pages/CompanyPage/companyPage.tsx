import { useParams } from 'react-router-dom'

export default function CompanyPage() {
	let { symbolId } = useParams()

	return <h1>👋 Hello World : {symbolId}</h1>
}
