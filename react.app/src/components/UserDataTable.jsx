// UserDataTable.jsx
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';

// Define the structure of the user data
const UserDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from a fake API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
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
        id: 'user', // Group column
        header: 'User Info',
        columns: [
          {
            accessorFn: (row) => `${row.name}`, // Accessor function to get the user's name
            id: 'name', // ID is required when using accessorFn
            header: 'Name',
            size: 250,
          },
          {
            accessorKey: 'email', // Direct access to the 'email' field
            enableClickToCopy: true,
            header: 'Email',
            size: 300,
          },
        ],
      },
      {
        id: 'id',
        header: 'Contact Info',
        columns: [
          {
            accessorKey: 'phone',
            header: 'Phone',
            size: 200,
          },
          {
            accessorKey: 'website',
            header: 'Website',
            size: 150,
          },
        ],
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, // The data must be stable (e.g., useMemo, useState)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4">Website:</Typography>
          <Typography variant="h6">{row.original.website}</Typography>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.forEach((row) => {
          alert('Deactivating ' + row.getValue('name'));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.forEach((row) => {
          alert('Activating ' + row.getValue('name'));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.forEach((row) => {
          alert('Contact ' + row.getValue('name'));
        });
      };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Deactivate
              </Button>
              <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>
              <Button
                color="info"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleContact}
                variant="contained"
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

export default UserDataTable;
