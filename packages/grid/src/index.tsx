import React from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';

// Import AG-Grid styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Import custom styles
import './styles.css';

// Re-export types for consumers
export type {
  ColDef,
  GridApi,
  GridReadyEvent,
  RowClickedEvent,
  CellClickedEvent,
  SelectionChangedEvent,
  FilterChangedEvent,
  SortChangedEvent,
  PaginationChangedEvent,
} from 'ag-grid-community';

export type { AgGridReactProps } from 'ag-grid-react';

// Theme class names for AG-Grid v32
export const gridThemes = {
  light: 'ag-theme-quartz',
  dark: 'ag-theme-quartz-dark',
  default: 'ag-theme-quartz',
} as const;

// Pre-configured DataGrid component props
export interface DataGridProps<TData = unknown> extends AgGridReactProps<TData> {
  theme?: keyof typeof gridThemes;
  containerClassName?: string;
}

/**
 * Pre-configured AG-Grid component with sensible defaults
 * Wraps AgGridReact with project-specific configuration
 */
export function DataGrid<TData = unknown>({
  theme = 'default',
  containerClassName = '',
  ...props
}: DataGridProps<TData>): React.ReactElement {
  const themeClass = gridThemes[theme];

  return (
    <div className={`proj-grid-wrapper ${themeClass} ${containerClassName}`.trim()}>
      <AgGridReact<TData>
        animateRows={true}
        enableCellTextSelection={true}
        suppressRowClickSelection={false}
        rowHeight={48}
        headerHeight={48}
        {...props}
      />
    </div>
  );
}

// Export the raw AgGridReact for advanced use cases
export { AgGridReact };
