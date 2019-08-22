import React from 'react';

/* components */
import { TableCell } from '@material-ui/core';

/* interfaces */
import { Signatory } from 'app/modules/Signatory/store/interface';

// so apperantly this is how we need to pass in the display
// option as a columns option parameter 'display'
type displayType = 'false' | 'true' | 'excluded' | undefined;

const display: displayType = 'false';

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
        display,
      },
    },
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
  signatories: Array<Signatory>
): Array<Array<string>> {
  const tableData: Array<Array<string>> = [];

  signatories.forEach((signatory, index) => {
    tableData.push([
      signatory.pubName,
      signatory.orgType,
      signatory.name,
      signatory.regPubId,
      signatory.IATIOrgRef,
      signatory.suppInfoUrl,
    ]);

    if (signatory._id) {
      tableData[index].unshift(signatory._id);
    }
  });

  return tableData;
}
