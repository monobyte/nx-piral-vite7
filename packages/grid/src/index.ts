import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  colorSchemeDarkBlue,
  colorSchemeLightCold,
} from 'ag-grid-community';

// Import AG-Grid styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Import custom styles
import './styles.css';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Pre-configured themes
export const gridThemes = {
  light: themeQuartz.withPart(colorSchemeLightCold),
  dark: themeQuartz.withPart(colorSchemeDarkBlue),
  default: themeQuartz,
};

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

// Pre-configured DataGrid component props
export interface DataGridProps<TData = unknown> extends AgGridReactProps<TData> {
  theme?: keyof typeof gridThemes;
  enableQuickFilter?: boolean;
}

/**
 * Pre-configured AG-Grid component with sensible defaults
 * Wraps AgGridReact with project-specific configuration
 */
export function DataGrid<TData = unknown>({
  theme = 'default',
  enableQuickFilter = false,
  ...props
}: DataGridProps<TData>): JSX.Element {
  return (
    <div className="proj-grid-wrapper">
      <AgGridReact<TData>
        theme={gridThemes[theme]}
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
