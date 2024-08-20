import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import {MaterialReactTable} from 'material-react-table';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the fake API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', // normal accessorKey
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
      },
      {
        accessorKey: 'website',
        header: 'Website',
        size: 150,
      },
      {
        accessorKey: 'company.name',
        header: 'Company',
        size: 200,
      },
    ],
    [],
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Data Table
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enableGrouping
        enableColumnResizing
        initialState={{
          columnVisibility: {
            company: false, // Initially hide the company column
          },
        }}
        muiTablePaperProps={{
          elevation: 3,
          sx: {
            p: 2,
            borderRadius: 2,
          },
        }}
      />
    </Container>
  );
};

export default App;
