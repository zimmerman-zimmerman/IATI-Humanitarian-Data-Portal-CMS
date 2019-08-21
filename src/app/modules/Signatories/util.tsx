import React from 'react';

/* components */
import { TableCell } from '@material-ui/core';

/* interfaces */
import { Signatory } from './store/interface';

export const tableBase = {
  title: 'Signatories',
  data: [
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
      'ActionAid UK',
      'International NGO',
      'ActionAid UK',
      'aai',
      'NL-KVK-27264000',
      'No',
    ],
    [
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
      name: 'Publisher',
      options: {
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
    'Organisation type',
    'GB signatory',
    'Registred Pub. ID',
    'IATI organisation reference',
    'Supp. URL',
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
  },
};

// formats data for the table
export function formatTable(
  signatories: Array<Signatory>
): Array<Array<string>> {
  const tableData: Array<Array<string>> = [];

  signatories.forEach(signatory => {
    tableData.push([
      signatory.pubName,
      signatory.orgType,
      signatory.name,
      signatory.regPubId,
      signatory.IATIOrgRef,
      signatory.suppInfoUrl,
    ]);
  });

  return tableData;
}
