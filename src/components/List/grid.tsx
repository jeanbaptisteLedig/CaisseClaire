// Theme
import { ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
// Core CSS
import 'ag-grid-community/styles/ag-grid.css' // Styles de base d'Ag-Grid
import 'ag-grid-community/styles/ag-theme-alpine.css' // Thème Alpine pour Ag-Grid

import { getData } from '../../services/data'

import { useMemo, useState } from 'react'

// Row Data Interface
interface IRow {
	id: number
	name: string
	age: number
	email: string
}

// Create new Grid component
const Grid = () => {
	const containerStyle = useMemo(() => ({ height: '25vh', width: '100%' }), [])
	const gridStyle = useMemo(() => ({ height: '100vh', width: '100%' }), [])

	const [rowData, setRowData] = useState<any[]>(getData())

	const [columnDefs, setColumnDefs] = useState<ColDef[]>([
		{ field: 'symbol', maxWidth: 120 },
		{ field: 'name', minWidth: 250 },
		{
			field: 'change',
			cellRenderer: 'agSparklineCellRenderer',
		},
		{
			field: 'volume',
			type: 'numericColumn',
			maxWidth: 140,
		},
	])
	const defaultColDef = useMemo<ColDef>(() => {
		return {
			flex: 1,
			minWidth: 100,
		}
	}, [])

	return (
		<div style={containerStyle}>
			<div style={gridStyle} className={'ag-theme-alpine'}>
				<AgGridReact
					rowData={rowData}
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					rowHeight={50}
				></AgGridReact>
			</div>
		</div>
	)
}

export default Grid
