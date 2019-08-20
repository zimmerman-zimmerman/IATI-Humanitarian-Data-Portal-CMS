import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from '.';
import Providers from 'app/Providers';
import { TableCell } from '@material-ui/core';

export const mockData = {
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

storiesOf('Data display|Table', module).add('Signatories', () => (
  <>
    <Providers>
      <Table {...mockData} />
    </Providers>
  </>
));
