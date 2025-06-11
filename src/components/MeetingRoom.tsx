import { Box, Typography } from '@mui/material';
import { MeetingRoomBox } from './styled/EventRequestStyles';

interface MeetingRoomProps {
  roomNumber: number;
  isSelected: boolean;
  positionCount: number;
  dateRange: string;
  onSelect: (roomNumber: number) => void;
}

const StarIcon = ({ room }: { room: number }) => (
  <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_d_0_481)'>
      <path
        d='M18 10L20.4324 15.5676L26 18L20.4324 20.4324L18 26L15.5676 20.4324L10 18L15.5676 15.5676L18 10Z'
        fill='#D175B6'
      />
      <path
        d='M19.9746 15.7676L20.0527 15.9473L20.2324 16.0254L24.751 18L20.2324 19.9746L20.0527 20.0527L19.9746 20.2324L18 24.751L16.0254 20.2324L15.9473 20.0527L15.7676 19.9746L11.248 18L15.7676 16.0254L15.9473 15.9473L16.0254 15.7676L18 11.248L19.9746 15.7676Z'
        stroke='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_0_481'
        x='0'
        y='0'
        width='36'
        height='36'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation='5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values={
            room === 1
              ? '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
              : '0 0 0 0 0.82 0 0 0 0 0.46 0 0 0 0 0.71 0 0 0 1 0'
          }
        />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_481' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_481' result='shape' />
      </filter>
    </defs>
  </svg>
);

export const MeetingRoom: React.FC<MeetingRoomProps> = ({
  roomNumber,
  isSelected,
  positionCount,
  dateRange,
  onSelect,
}) => {
  return (
    <MeetingRoomBox isSelected={isSelected} onClick={() => onSelect(roomNumber)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, fontWeight: '500' }}>
          Meeting Room {roomNumber}
        </Typography>
        <StarIcon room={roomNumber} />
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            fontWeight: '500',
            color: isSelected ? '#000000' : '#D175B6',
            '.meeting-room:hover &': {
              color: isSelected ? '#ffffff' : '#D175B6',
            },
          }}
        >
          {positionCount} Positions
        </Typography>
      </Box>
      <Typography sx={{ fontSize: { xs: '8px', sm: '10px', md: '12px' }, color: '#FFFFFF' }}>
        {dateRange}
      </Typography>
    </MeetingRoomBox>
  );
};
