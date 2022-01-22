import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'mobile', headerName: 'Mobile', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },

];

const rows = [
  { id: 1, userName: 'Snow', email: 'Jon', mobile: '032565121', age: 35 },
  { id: 2, userName: 'Lannister', email: 'Cersei', mobile: '032565121', age: 42 },
  { id: 3, userName: 'Lannister', email: 'Jaime', mobile: '032565121', age: 45 },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '50%', margin: '5% 20%'}}>
        <Typography variant='h3' color='primary'>List of Users</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
