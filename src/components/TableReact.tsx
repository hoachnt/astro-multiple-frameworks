import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';

const columns: GridColDef[] = [
    { field: 'number', headerName: 'Number', width: 160 },
    { field: 'price', headerName: 'Price', width: 160, type: 'number' },
    { field: 'provider', headerName: 'Provider', width: 160 },
    {
        field: 'state',
        headerName: 'State',
        width: 160,
    },
];

export default function TableReact({ sims }: { sims: any }) {
    return (
        <div style={{ height: 720, width: '100%' }}>
            <DataGrid
                className="data-grid"
                rows={sims}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 25 },
                    },
                }}
                pageSizeOptions={[25, 50, 100, { label: 'All', value: -1 }]}
                checkboxSelection
            />
        </div>
    );
}