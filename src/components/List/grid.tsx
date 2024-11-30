// Theme
import { ColDef, ValueFormatterParams } from 'ag-grid-community'
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react'
// Core CSS
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchCompanies } from '../../services/api-services'
import { SparkLineChart } from '@mui/x-charts'
import { Box } from '@mui/material'

const CustomSparkLineChart = (params: CustomCellRendererProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<SparkLineChart data={params.value} height={48} colors={['#0ea5e9']} area />
		</Box>
	)
}
const changeFormatter = (params: CustomCellRendererProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<p className={`${params.value > 0 ? 'text-emerald-500' : 'text-red-600'} text-right`}>{params.value}%</p>
		</Box>
	)
}

const currencyFormatter = (params: ValueFormatterParams) => {
	return '$' + params.value
}

// Create new Grid component
const Grid = () => {
	const navigate = useNavigate()

	const [rowData, setRowData] = useState<ICompany[]>(fetchCompanies(20).companies)

	const [columnDefs, setColumnDefs] = useState<ColDef[]>([
		{ field: 'symbol', maxWidth: 120 },
		{ field: 'name', minWidth: 200 },
		{
			field: 'volume',
			type: 'numericColumn',
			maxWidth: 100,
			valueFormatter: currencyFormatter,
		},
		{
			field: 'change',
			cellRenderer: changeFormatter,
			type: 'rightAligned',
			maxWidth: 100,
		},
		{
			field: 'evolution',
			cellRenderer: CustomSparkLineChart,
			maxWidth: 200,
		},
	])

	const onRowClicked = (event: { data: ICompany }) => {
		const companyId = event.data.symbol
		navigate(`/companies/${companyId}`)
	}

	return (
		<div style={{ height: '50vh', width: '100%' }}>
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
