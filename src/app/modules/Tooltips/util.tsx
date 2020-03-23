import React from 'react';
import find from 'lodash/find';

/* components */
import { EditValueForm } from './common/EditValueForm';

/* interfaces */
import { Tooltip } from './store/interface';
import { FilterType, Display, SortDirection } from 'mui-datatables';

export const tableBase = props => {
  return {
    title: 'Tooltips',
    data: [['', '', '', '', '']],
    columns: [
      {
        name: 'Page',
        options: {
          sortDirection: 'desc' as SortDirection,
          filterType: 'dropdown' as FilterType,
        },
      },
      {
        name: 'Title',
        options: {
          filterType: 'dropdown' as FilterType,
        },
      },
      {
        name: 'Purpose',
        options: {
          filterType: 'dropdown' as FilterType,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <EditValueForm
                value={value}
                updateValue={updateValue}
                updateValueOnDB={newValue => {
                  const rowData = find(
                    props.data,
                    d => d[5] === tableMeta.rowData[5]
                  );
                  props.editTooltip({
                    id: rowData[5],
                    object: {
                      page: rowData[0],
                      title: rowData[1],
                      purpose: newValue,
                      whyGB: rowData[3],
                      calculation: rowData[4],
                    },
                  });
                }}
              />
            );
          },
        },
      },
      {
        name: 'Why GB',
        options: {
          filterType: 'dropdown' as FilterType,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <EditValueForm
                value={value}
                updateValue={updateValue}
                updateValueOnDB={newValue => {
                  const rowData = find(
                    props.data,
                    d => d[5] === tableMeta.rowData[5]
                  );
                  props.editTooltip({
                    id: rowData[5],
                    object: {
                      page: rowData[0],
                      title: rowData[1],
                      purpose: rowData[2],
                      whyGB: newValue,
                      calculation: rowData[4],
                    },
                  });
                }}
              />
            );
          },
        },
      },
      {
        name: 'Calculation',
        options: {
          filterType: 'dropdown' as FilterType,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <EditValueForm
                value={value}
                updateValue={updateValue}
                updateValueOnDB={newValue => {
                  const rowData = find(
                    props.data,
                    d => d[5] === tableMeta.rowData[5]
                  );
                  props.editTooltip({
                    id: rowData[5],
                    object: {
                      page: rowData[0],
                      title: rowData[1],
                      purpose: rowData[2],
                      whyGB: rowData[3],
                      calculation: newValue,
                    },
                  });
                }}
              />
            );
          },
        },
      },
      {
        name: 'id',
        options: {
          filter: false,
          viewColumns: false,
          display: 'false' as Display,
        },
      },
    ],
    options: {
      print: false,
      search: true,
      filter: true,
      download: true,
      rowHover: false,
      pagination: false,
      viewColumns: true,
      responsive: 'scroll' as any,
      filterType: 'checkbox' as any,
      selectableRows: 'none' as any,
      downloadOptions: {
        filename: 'tooltips.csv',
        separator: ',',
        filterOptions: {
          useDisplayedColumnsOnly: true,
          useDisplayedRowsOnly: true,
        },
      },
    },
  };
};

// formats data for the table
export function formatTable(tooltips: Tooltip[]): string[][] {
  const tableData: string[][] = [];

  tooltips.forEach(tooltip => {
    tableData.push([
      tooltip.page,
      tooltip.title,
      tooltip.purpose,
      tooltip.whyGB,
      tooltip.calculation,
      tooltip._id,
    ]);
  });

  return tableData;
}
