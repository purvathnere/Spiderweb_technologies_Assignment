import NorthIcon from '@mui/icons-material/North';
import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable, { ColumnDef } from '../components/CustomTable';
import { MeetingRoom } from '../components/MeetingRoom';
import { positions, coordinatorOptions, contractorOptions } from '../data/mockPositions';
import {
  StyledAutocomplete,
  StyledContractorAutocomplete,
  SaveButton,
  EventInfoBox,
} from '../components/styled/EventRequestStyles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function AssignCoordinatorCoordinator() {
  const [page, setPage] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(1);
  const rowsPerPage = 7;

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const columns: ColumnDef[] = [
    {
      field: 'position',
      headerName: 'Position',
      width: 200,
      minWidth: 200,
      sortable: true,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 150,
      minWidth: 150,
      sortable: true,
    },
    {
      field: 'info',
      headerName: 'Info',
      width: 150,
      minWidth: 150,
      sortable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      minWidth: 150,
      sortable: true,
    },
    {
      field: 'contractor',
      headerName: 'Contractor',
      width: 200,
      minWidth: 200,
      sortable: true,
      renderCell: () => (
        <Autocomplete
          size='small'
          fullWidth
          options={contractorOptions}
          renderInput={(params) => (
            <StyledContractorAutocomplete
              {...params}
              size='small'
              placeholder='Select Contractor'
            />
          )}
        />
      ),
    },
  ];

  return (
    <Grid container spacing={'20px'}>
      <Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
          Assign Coordinator
        </Typography>
        <Grid gap={'4px'} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Autocomplete
            fullWidth
            options={coordinatorOptions}
            renderInput={(params) => (
              <StyledAutocomplete {...params} placeholder='Search Coordinator' />
            )}
          />
          <Grid sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography sx={{ fontSize: '16px', color: '#D175B6', cursor: 'pointer' }}>
              Add New Coordinator
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
          Event Name <span style={{ fontSize: '20px', fontWeight: '300' }}>(Venue Here)</span>
        </Typography>
        <Grid container height={'74px'} spacing={'10px'}>
          <Grid size={12}>
            <EventInfoBox>
              <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
                Start: <span style={{ fontWeight: '500' }}>12-12-2023</span>
              </Grid>
              <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
                Ends: <span style={{ fontWeight: '500' }}>15-12-2023</span>
              </Grid>
            </EventInfoBox>
          </Grid>
          <Grid size={12}>
            <EventInfoBox>Venue Address: Some Location 12, Name Here, City, State.</EventInfoBox>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
          Assign Contractor
        </Typography>
        <Grid container spacing={'20px'}>
          <Grid size={{ xl: 'auto', xs: 12 }}>
            <Grid
              sx={{
                border: '1px solid #D175B6',
                borderRadius: '12px',
                gap: '16px',
                width: { xl: '340px' },
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#000000',
                boxShadow: '0px 0px 30px 0px #FFFFFF33',
              }}
            >
              {[1, 2, 3, 4, 5].map((room) => (
                <MeetingRoom
                  key={room}
                  roomNumber={room}
                  isSelected={selectedRoom === room}
                  positionCount={12}
                  dateRange='Start from 12 Jan 2023 - Ends at 15 Jan 2023'
                  onSelect={setSelectedRoom}
                />
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xl: 'grow', xs: 12 }}>
            <Grid>
              <Typography sx={{ fontSize: '18px', fontWeight: '500', mb: '12px' }}>
                Positions
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: '1px solid #D175B6',
                height: '460px',
                borderRadius: '12px',
                bgcolor: '#000000',
                boxShadow: '0px 0px 30px 0px #FFFFFF33',
                overflow: 'hidden',
              }}
            >
              <CustomTable
                columns={columns}
                rows={positions}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
              />
            </Grid>
          </Grid>
          <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SaveButton variant='contained'>Save Edits</SaveButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NewEventRequest() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={'20px'} sx={{ p: { xs: '20px 20px', md: '20px 40px' } }}>
      <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Grid sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{ height: '40px', width: '40px', background: '#FFFFFF1A', borderRadius: '50%' }}
          >
            <NorthIcon sx={{ transform: 'rotate(-90deg)' }} />
          </IconButton>
          <Typography sx={{ fontSize: { xs: '22px', md: '40px' }, fontWeight: '400' }}>
            Event Name
          </Typography>
          <Typography sx={{ fontSize: { xs: '16px', md: '24px' }, fontWeight: '300' }}>
            (Venue Details)
          </Typography>
        </Grid>

        <Grid sx={{ width: '100%', gap: '20px', display: 'flex', flexDirection: 'column' }}>
          <Grid
            sx={{
              ...(isMobile ? { width: '674px', height: '50px' } : {}),
              borderRadius: '8px',
              border: '2px solid #D175B6',
              overflow: 'hidden',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              variant={isMobile ? 'standard' : 'fullWidth'}
              orientation={isMobile ? 'horizontal' : 'vertical'}
              sx={{
                '& .MuiTab-root': {
                  padding: '0px 20px',
                  transition: 'all 0.3s ease-in-out',
                  '&.Mui-selected': {
                    background: '#D175B6',
                    color: '#fff',
                  },
                  '&:hover': {
                    background: '#D175B666',
                    color: '#fff',
                  },
                },
              }}
            >
              <Tab sx={{ textTransform: 'none' }} label='Event Details' {...a11yProps(0)} />
              <Tab
                sx={{ textTransform: 'none' }}
                label='Assign Coordinator/Coordinator'
                {...a11yProps(1)}
              />
              <Tab sx={{ textTransform: 'none' }} label='Session Management' {...a11yProps(2)} />
              <Tab sx={{ textTransform: 'none' }} label='Generate SOW' {...a11yProps(3)} />
            </Tabs>
          </Grid>
          <CustomTabPanel value={value} index={0}>
            Event Details
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <AssignCoordinatorCoordinator />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Session Management
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Generate SOW
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}
