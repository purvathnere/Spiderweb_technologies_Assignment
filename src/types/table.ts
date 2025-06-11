import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';

export type TableColumnStyle = SxProps<Theme>;

export interface TableColumn {
  field: string;
  headerName: string;
  width?: number;
  minWidth?: number;
  sticky?: boolean;
  sortable?: boolean;
  bgcolor?: string;
  renderCell?: (params: { row: any }) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
}

export interface RenderCellParams<T = any> {
  row: T;
  value: any;
  field: string;
}
