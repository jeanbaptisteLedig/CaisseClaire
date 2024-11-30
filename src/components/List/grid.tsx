// Theme
import { ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
// Core CSS
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchCompanies } from '../../services/api-services'

// Create new Grid component
const Grid = () => {
	const navigate = useNavigate()

	const [rowData, setRowData] = useState<any[]>(fetchCompanies(20).companies)

	const [columnDefs, setColumnDefs] = useState<ColDef[]>([
		{ field: 'symbol', maxWidth: 120 },
		{ field: 'name', minWidth: 200 },
		{
			field: 'volume',
			type: 'numericColumn',
			maxWidth: 140,
		},
	])

	const onRowClicked = (event: { data: ICompany }) => {
		const companyId = event.data.symbol
		navigate(`/companies/${companyId}`)
	}

	return (
		<div style={{ height: '70vh', width: '100%' }}>
			<div style={{ height: '100%', width: '100%' }} className={'ag-theme-quartz'}>
				<AgGridReact
					rowData={rowData}
					columnDefs={columnDefs}
					defaultColDef={{
						flex: 1,
						minWidth: 100,
					}}
					rowHeight={50}
					onRowClicked={onRowClicked}
				></AgGridReact>
			</div>
		</div>
	)
}

export default Grid
