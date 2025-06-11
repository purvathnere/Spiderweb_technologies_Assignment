import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box } from '@mui/material';
import React from 'react';
import { ColumnDef } from '../components/CustomTable';
import { EventRequest } from '../data/mockEventRequests';

interface CellRendererProps {
  row: EventRequest;
}

const CellRenderer: React.FC<CellRendererProps & { onRowClick: (id: number) => void }> = ({
  row,
  onRowClick,
}) => {
  const handleClick = () => {
    onRowClick(row.id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <VisibilityOutlinedIcon fontSize='small' sx={{ mr: 1 }} />
      <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.eventName}</Box>
    </Box>
  );
};

export const getEventRequestColumns = (onRowClick: (id: number) => void): ColumnDef[] => [
  {
    field: 'eventName',
    headerName: 'Event Name',
    width: 200,
    minWidth: 200,
    sticky: true,
    sortable: true,
    bgcolor: '#D175B6',
    renderCell: (params) => <CellRenderer row={params.row} onRowClick={onRowClick} />,
  },
  {
    field: 'eventStart',
    headerName: 'Event Start',
    width: 220,
    minWidth: 220,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'eventEnd',
    headerName: 'Event End',
    width: 220,
    minWidth: 220,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'clientName',
    headerName: 'Client Name',
    width: 220,
    minWidth: 220,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'contactInfo',
    headerName: 'Contact Info',
    width: 250,
    minWidth: 250,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'venue',
    headerName: 'Venue',
    width: 400,
    minWidth: 400,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'city',
    headerName: 'City',
    width: 250,
    minWidth: 250,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'state',
    headerName: 'State',
    width: 250,
    minWidth: 250,
    sortable: true,
    bgcolor: '#D175B6',
  },
  {
    field: 'zipcode',
    headerName: 'Zipcode',
    width: 120,
    minWidth: 120,
    sortable: true,
    bgcolor: '#D175B6',
  },
];
