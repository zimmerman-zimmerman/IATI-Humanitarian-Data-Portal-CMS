import React from 'react';

/* components */

import { Display, FilterType } from 'mui-datatables';

/* interfaces */
import { SignatoryProgress } from 'app/modules/SignatoryProgress/store/interface';

export const tableBase = {
  title: 'Signatory Progress',
  data: [
    ['2017-06-01', '51', '37', '31', '16', '0'],
    ['2018-05-01', '59', '44', '36', '31', '8'],
    ['2019-05-01', '59', '48', '43', '41', '14'],
  ],
  columns: [
    {
      name: 'id',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'Date',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },

    {
      name: 'Total Signatories',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Publishing open data using IATI',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Publishing data on their humanitarian activities',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Using v2.02 of the IATI standard or later',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Providing more granular v2.02',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: false,
    viewColumns: true,
    responsive: 'scroll' as any,
    filterType: 'checkbox' as any,
    selectableRows: 'none' as any,
    onRowClick: e => console.log(e),
  },
};

// formats data for the table
export function formatTable(
  signatoryProgress: Array<SignatoryProgress>
): Array<Array<string>> {
  const tableData: Array<Array<string>> = [];

  signatoryProgress.forEach((signatory, index) => {
    tableData.push([
      signatory.Date,
      signatory.totalSig,
      signatory.publishingOpenDataIATI,
      signatory.publishingHumanitarianActivities,
      signatory.using202OrLater,
      signatory.providingGranular202Data,
    ]);

    if (signatory._id) {
      tableData[index].unshift(signatory._id);
    }
  });

  return tableData;
}
