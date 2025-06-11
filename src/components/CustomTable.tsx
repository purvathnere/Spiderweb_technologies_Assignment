import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  PaginationItem,
} from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export interface ColumnDef {
  field: string;
  headerName: string;
  width?: number;
  minWidth?: number;
  sticky?: boolean;
  sortable?: boolean;
  renderCell?: (params: any) => React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
  bgcolor?: string;
}

interface CustomTableProps {
  columns: ColumnDef[];
  rows: any[];
  rowsPerPage?: number;
  page?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  containerStyles?: React.CSSProperties;
  showPagination?: boolean;
  stickyHeaderbgColor?: string;
  cellbgcolor?: (index: number) => string;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  rows,
  rowsPerPage = 9,
  page = 1,
  onPageChange,
  containerStyles,
  showPagination = true,
  stickyHeaderbgColor,
  cellbgcolor = (index: number) => (index % 2 === 0 ? 'transparent' : 'transparent'),
}) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(event, newPage);
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', ...containerStyles }}>
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          bgcolor: 'transparent',
          boxShadow: 'none',
          borderRadius: '0px',
          overflow: 'auto',
          '& .MuiTableCell-root': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 0,
          },
          '& .sticky-column': {
            position: 'sticky',
            left: 0,
            zIndex: 3,
            background: 'inherit',
            backdropFilter: 'blur(10px)',
          },
          '& .sticky-header': {
            position: 'sticky',
            left: 0,
            zIndex: 4,
            background: stickyHeaderbgColor || 'transparent',
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.field}
                  sx={{
                    bgcolor: column.bgcolor || '#000000',
                    color: 'white',
                    p: '12px 20px',
                    m: 0,
                    width: column.width || 'auto',
                    minWidth: column.minWidth || 'auto',
                    height: '44px',
                    fontSize: '16px',
                    fontWeight: '500',
                    '& .cell-content': {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '150px',
                    },
                    '&:hover': {
                      cursor: column.sortable ? 'pointer' : 'default',
                      bgcolor: column.sortable ? '#D175B6CC' : '#D175B6',
                    },
                    borderBottom: '1px solid #D175B6 !important',
                  }}
                  className={`${column.sticky ? 'sticky-header' : ''} ${
                    column.headerClassName || ''
                  }`}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {column.headerName}
                    {column.sortable && <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex} hover sx={{ height: '50px' }}>
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={`${rowIndex}-${column.field}`}
                      sx={{
                        p: '0px 20px',
                        m: 0,
                        bgcolor: cellbgcolor(rowIndex) || 'transparent',
                        borderBottom: '1px solid #D175B6 !important',
                        height: '44px',
                        fontSize: '14px',
                        '& .cell-content': {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '150px',
                        },
                        '&:hover': {
                          bgcolor: '#D175B61A',
                        },
                      }}
                      className={`${column.sticky ? 'sticky-column' : ''} ${
                        column.cellClassName || ''
                      }`}
                      title={row[column.field]?.toString()}
                    >
                      {column.renderCell ? column.renderCell({ row }) : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {showPagination && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000000',
            height: '54px',
          }}
        >
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => (
                    <NorthIcon
                      sx={{
                        transform: 'rotate(-90deg)',
                      }}
                    />
                  ),
                  next: () => (
                    <NorthIcon
                      sx={{
                        transform: 'rotate(90deg)',
                      }}
                    />
                  ),
                }}
                {...item}
              />
            )}
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '14px',
                color: 'white',
                background: 'transparent !important',
              },
              '& .Mui-selected': {
                color: '#D175B6 !important',
                height: '32px',
                width: '32px',
                background: 'transparent !important',
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CustomTable;
