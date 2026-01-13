import { useState, useMemo, useCallback } from 'react';
import { Card, Title, Text, Group, Badge, Button, Stack } from '@mantine/core';
import { DataGrid } from '@proj/grid';
import type { ColDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import { formatMessage } from '@proj/utils';
import styles from './AgGridPage.module.css';

interface EmployeeData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: 'Active' | 'On Leave' | 'Remote';
}

const generateDummyData = (): EmployeeData[] => [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    salary: 95000,
    startDate: '2021-03-15',
    status: 'Active',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    department: 'Design',
    position: 'UI/UX Designer',
    salary: 82000,
    startDate: '2022-01-10',
    status: 'Active',
  },
  {
    id: 3,
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.j@company.com',
    department: 'Engineering',
    position: 'Tech Lead',
    salary: 115000,
    startDate: '2020-06-22',
    status: 'Remote',
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.w@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 88000,
    startDate: '2021-09-01',
    status: 'Active',
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.b@company.com',
    department: 'Sales',
    position: 'Sales Representative',
    salary: 65000,
    startDate: '2023-02-14',
    status: 'On Leave',
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.d@company.com',
    department: 'HR',
    position: 'HR Specialist',
    salary: 72000,
    startDate: '2022-07-18',
    status: 'Active',
  },
  {
    id: 7,
    firstName: 'Chris',
    lastName: 'Wilson',
    email: 'chris.w@company.com',
    department: 'Engineering',
    position: 'DevOps Engineer',
    salary: 98000,
    startDate: '2021-11-30',
    status: 'Remote',
  },
  {
    id: 8,
    firstName: 'Amanda',
    lastName: 'Taylor',
    email: 'amanda.t@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    salary: 85000,
    startDate: '2020-04-05',
    status: 'Active',
  },
  {
    id: 9,
    firstName: 'Robert',
    lastName: 'Martinez',
    email: 'robert.m@company.com',
    department: 'Engineering',
    position: 'Junior Developer',
    salary: 62000,
    startDate: '2023-08-21',
    status: 'Active',
  },
  {
    id: 10,
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.a@company.com',
    department: 'Product',
    position: 'Product Manager',
    salary: 105000,
    startDate: '2019-12-01',
    status: 'Active',
  },
];

export const AgGridPage: React.FC = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);

  const rowData = useMemo(() => generateDummyData(), []);

  const columnDefs = useMemo<ColDef<EmployeeData>[]>(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 80,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      { field: 'firstName', headerName: 'First Name', filter: true },
      { field: 'lastName', headerName: 'Last Name', filter: true },
      { field: 'email', headerName: 'Email', flex: 1, filter: true },
      { field: 'department', headerName: 'Department', filter: true },
      { field: 'position', headerName: 'Position', flex: 1 },
      {
        field: 'salary',
        headerName: 'Salary',
        valueFormatter: (params) =>
          params.value ? `$${params.value.toLocaleString()}` : '',
        filter: 'agNumberColumnFilter',
      },
      { field: 'startDate', headerName: 'Start Date', filter: 'agDateColumnFilter' },
      {
        field: 'status',
        headerName: 'Status',
        cellRenderer: (params: { value: string }) => {
          const colorMap: Record<string, string> = {
            Active: 'green',
            'On Leave': 'orange',
            Remote: 'blue',
          };
          return (
            <Badge color={colorMap[params.value] || 'gray'} size="sm">
              {params.value}
            </Badge>
          );
        },
      },
    ],
    []
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      resizable: true,
      filter: true,
    }),
    []
  );

  const onGridReady = useCallback((event: GridReadyEvent) => {
    setGridApi(event.api);
  }, []);

  const onSelectionChanged = useCallback(() => {
    if (gridApi) {
      const selectedRows = gridApi.getSelectedRows();
      setSelectedCount(selectedRows.length);
    }
  }, [gridApi]);

  const handleExport = useCallback(() => {
    if (gridApi) {
      gridApi.exportDataAsCsv({
        fileName: 'employee-data.csv',
      });
    }
  }, [gridApi]);

  const handleClearSelection = useCallback(() => {
    if (gridApi) {
      gridApi.deselectAll();
    }
  }, [gridApi]);

  return (
    <div className={styles.page}>
      <Title order={1} className={styles.title}>
        {formatMessage('AG-Grid Data Table')}
      </Title>
      <Text c="dimmed" size="lg" className={styles.subtitle}>
        Enterprise-grade data grid with sorting, filtering, and selection
      </Text>

      <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
        <Stack gap="md">
          <Group justify="space-between">
            <Group gap="xs">
              <Badge color="blue" size="lg">
                {rowData.length} Records
              </Badge>
              {selectedCount > 0 && (
                <Badge color="violet" size="lg">
                  {selectedCount} Selected
                </Badge>
              )}
            </Group>
            <Group gap="xs">
              {selectedCount > 0 && (
                <Button variant="outline" size="sm" onClick={handleClearSelection}>
                  Clear Selection
                </Button>
              )}
              <Button size="sm" onClick={handleExport}>
                Export CSV
              </Button>
            </Group>
          </Group>

          <div className={styles.gridContainer}>
            <DataGrid
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              onSelectionChanged={onSelectionChanged}
              rowSelection="multiple"
              pagination
              paginationPageSize={5}
              paginationPageSizeSelector={[5, 10, 20]}
            />
          </div>
        </Stack>
      </Card>
    </div>
  );
};
