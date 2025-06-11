import { Box, TextField, Button, styled } from '@mui/material';

export const StyledAutocomplete = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '44px',
    color: '#fff',
    '& fieldset': {
      borderRadius: '8px',
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D175B6',
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
}));

export const StyledContractorAutocomplete = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '36px',
    color: '#fff',
    '& fieldset': {
      borderRadius: '4px',
      borderColor: '#D175B6',
    },
    '&:hover fieldset': {
      borderColor: '#D175B6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D175B6',
    },
  },
});

export const SaveButton = styled(Button)({
  backgroundColor: '#D175B6',
  color: '#fff',
  height: '60px',
  width: '210px',
  padding: '16px 60px',
  borderRadius: '8px',
  boxShadow: '0px 0px 20px 0px #00000099 inset, 0px 30px 80px 0px #FF00FF4D',
  '&:hover': {
    backgroundColor: '#D175B6CC',
  },
});

export const MeetingRoomBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ isSelected }) => ({
  border: '1px solid #D175B6',
  borderRadius: '8px',
  height: '80px',
  padding: '16px',
  cursor: 'pointer',
  ...(isSelected ? { backgroundColor: '#D175B6' } : {}),
  boxShadow: '0px 0px 30px 0px #D175B633',
  '&:hover': {
    backgroundColor: '#D175B666',
  },
}));

export const EventInfoBox = styled(Box)({
  border: '1px solid #D175B6',
  fontSize: '14px',
  fontWeight: '300',
  display: 'flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '3px',
});
