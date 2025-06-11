import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EventRequestsTable from './pages/EventRequestsTable';
import NewEventRequest from './pages/NewEventRequest';

const darkTheme = createTheme({
  typography: {
    fontFamily: '"Kanit", sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#e83e8c',
    },
    background: {
      default: '#121212',
      paper: '#1e1e30',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Kanit", sans-serif',
        },
      },
    },
  },
});

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(() => {
    const path = location.pathname;
    if (path.startsWith('/events')) return 'Events';
    if (path.startsWith('/positions')) return 'Positions';
    if (path.startsWith('/contractors')) return 'Contractors';
    if (path.startsWith('/users')) return 'Users';
    if (path.startsWith('/profile')) return 'Profile';
    return 'Events';
  });

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
            p: { xs: '20px', sm: '30px', md: '40px' },
            gap: 2,
          }}
        >
          <Sidebar
            selectedSection={selectedSection}
            onSectionChange={setSelectedSection}
            isOpen={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              border: '2px solid #D175B6',
              borderRadius: '16px',
              height: '100%',
              boxShadow: '0px 0px 30px 0px #D175B633',
            }}
          >
            <Routes>
              {/* Events Routes */}
              <Route path='/' element={<Navigate to='/events' replace={true} />} />
              <Route path='/events' element={<EventRequestsTable />} />
              <Route path='/events/new-request' element={<NewEventRequest />} />
              <Route path='/events/estimate' element={<div>Estimate</div>} />
              <Route path='/events/partial-requests' element={<div>Partial Requests</div>} />

              {/* Other Routes - Add placeholder components or messages */}
              <Route path='/positions' element={<div>Positions Page</div>} />
              <Route path='/contractors' element={<div>Contractors Page</div>} />
              <Route path='/users/*' element={<div>Users Page</div>} />
              <Route path='/profile' element={<div>Profile Page</div>} />

              {/* 404 Route */}
              <Route path='*' element={<div>Page not found</div>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
