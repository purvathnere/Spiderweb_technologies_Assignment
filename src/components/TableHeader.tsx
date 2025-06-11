import React from 'react';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

interface TableHeaderProps {
  title: string;
  onSearch: (searchTerm: string) => void;
  onAdd: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title, onSearch, onAdd }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '20px 40px',
      }}
    >
      <Grid>
        <Typography sx={{ fontSize: { xs: '36px', md: '40px' }, fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Grid>

      <Grid sx={{ display: 'flex', gap: '10px' }}>
        <TextField
          placeholder='Search here'
          size='small'
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ height: '24px', width: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={onAdd}
          sx={{
            minWidth: 'auto',
            width: 40,
            height: 40,
            border: '1px solid #fff',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #FF00FF, #8F00FF)',
          }}
        >
          <AddIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TableHeader;
