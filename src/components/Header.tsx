// src/components/Header.tsx
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import NotificationsIconOutlined from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Logo } from '../assets/icons';
import { ProfileImage } from '../assets/images';

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const Header = ({ onToggleSidebar, isSidebarOpen }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: { xs: '16px', sm: '24px', md: '40px' },
        height: { xs: '70px', sm: '90px', md: '120px' },
        borderBottom: '1px solid rgba(209, 117, 182, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
        <img
          src={Logo}
          alt='Logo'
          style={{
            height: isMobile ? '40px' : isTablet ? '50px' : '74px',
            width: isMobile ? '40px' : isTablet ? '50px' : '74px',
          }}
        />
        {(isMobile || isTablet) && (
          <IconButton
            size={isMobile ? 'medium' : 'large'}
            edge='start'
            onClick={onToggleSidebar}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(209, 117, 182, 0.1)',
              },
            }}
          >
            <MenuIcon
              sx={{
                fontSize: {
                  xs: '24px',
                  sm: '28px',
                  md: '32px',
                },
              }}
            />
          </IconButton>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2, md: 3 } }}>
        <>
          <IconButton
            size={isMobile ? 'small' : 'medium'}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(209, 117, 182, 0.1)',
              },
            }}
          >
            <InfoOutlined
              sx={{
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                  md: '28px',
                },
              }}
            />
          </IconButton>

          <IconButton
            size={isMobile ? 'small' : 'medium'}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(209, 117, 182, 0.1)',
              },
            }}
          >
            <Badge badgeContent={3} color='error'>
              <NotificationsIconOutlined
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '28px',
                  },
                }}
              />
            </Badge>
          </IconButton>
        </>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5, md: 2 } }}>
          <Avatar
            src={ProfileImage}
            sx={{
              height: { xs: '36px', sm: '44px', md: '64px' },
              width: { xs: '36px', sm: '44px', md: '64px' },
              border: '2px solid #D175B6',
              boxShadow: '0px 0px 40px 0px #D175B633',
            }}
          />
          <Box>
            <Typography
              variant='body2'
              sx={{
                fontSize: { sm: '13px', md: '16px' },
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
            >
              Hi, <span style={{ color: '#00EEC5', cursor: 'pointer' }}>Muhammad Asad</span>
            </Typography>
            <Typography
              variant='caption'
              sx={{
                fontSize: { sm: '12px', md: '14px' },
                fontWeight: '300',
                display: 'block',
              }}
            >
              welcome back!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
