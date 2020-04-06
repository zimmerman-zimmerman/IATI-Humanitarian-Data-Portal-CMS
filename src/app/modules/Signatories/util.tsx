import React from 'react';

/* components */
import { TableCell } from '@material-ui/core';
import { Display, FilterType, SortDirection } from 'mui-datatables';

/* interfaces */
import { Signatory } from 'app/modules/Signatory/store/interface';

export const tableBase = {
  title: 'Signatories',
  data: [
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      '1',
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
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
      name: 'Publisher',
      options: {
        sortDirection: 'asc' as SortDirection,
        filterType: 'dropdown' as FilterType,
        customHeadRender: () => (
          <TableCell
            key="name"
            style={{ position: 'sticky', left: 0, top: 0, zIndex: 102 }}
          >
            Name
          </TableCell>
        ),
        setCellProps: () => ({
          style: { position: 'sticky', left: 0, zIndex: 101 },
        }),
      },
    },
    {
      name: 'Organisation type',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'GB signatory',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Registred Pub. ID',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'IATI organisation reference',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'Supp. URL',
      options: {
        filterType: 'dropdown' as FilterType,
      },
    },
    {
      name: 'fiscalStart',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'fiscalEnd',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'reportsToEU',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'reportsToFTS',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'reportsToFTSViaIATI',
      options: {
        filter: false,
        viewColumns: false,
        display: 'false' as Display,
      },
    },
    {
      name: 'tracability',
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
  signatories: Signatory[]
): Array<string>[] {
  const tableData: Array<string>[] = [];

  signatories.forEach((signatory, index) => {
    tableData.push([
      signatory.pubName,
      signatory.orgType,
      signatory.name,
      signatory.regPubId,
      signatory.IATIOrgRef,
      signatory.suppInfoUrl,
      signatory.fiscalStart || '',
      signatory.fiscalEnd || '',
      signatory.reportsToEU,
      signatory.reportsToFTS,
      signatory.reportsToFTSViaIATI,
      signatory.tracability || '',
    ]);

    if (signatory._id) {
      tableData[index].unshift(signatory._id);
    }
  });

  return tableData;
}
