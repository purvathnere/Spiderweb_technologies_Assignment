import { styled } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';

export const LogoutButton = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '56px',
  background: '#000000',
  borderRadius: '8px',
  backgroundColor: theme.palette.background.default,
  transition: 'background-color 0.3s ease',
  padding: '16px 20px',
  justifyContent: 'center',
  boxShadow: '0px 0px 30px 0px #D175B633',
}));
