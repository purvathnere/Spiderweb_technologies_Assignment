import { Box } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../components/CustomTable';
import TableHeader from '../components/TableHeader';
import { getEventRequestColumns } from '../config/columnConfig';
import { eventRequests } from '../data/mockEventRequests';

const EventRequestsTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const rowsPerPage = 9;
  const navigate = useNavigate();

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
    setPage(1);
  };

  const handleAdd = () => {
    navigate('/events/new-request');
  };

  const handleRowClick = (id: number) => {
    navigate(`/events/new-request?id=${id}`);
  };

  const filteredEvents = useMemo(() => {
    if (!searchTerm) return eventRequests;

    const searchLower = searchTerm.toLowerCase();
    return eventRequests.filter(
      (event) =>
        event.eventName.toLowerCase().includes(searchLower) ||
        event.clientName.toLowerCase().includes(searchLower) ||
        event.venue.toLowerCase().includes(searchLower) ||
        event.city.toLowerCase().includes(searchLower) ||
        event.state.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  const columns = useMemo(() => getEventRequestColumns(handleRowClick), []);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TableHeader title='Event Requests' onSearch={handleSearch} onAdd={handleAdd} />

      <CustomTable
        columns={columns}
        rows={filteredEvents}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        stickyHeaderbgColor='#D175B6'
      />
    </Box>
  );
};

export default EventRequestsTable;
