import React from 'react';
import { SignatoryLayout } from './layout';

/* consts */
import { orgTypeOptions } from 'app/__consts__/dataConsts';

export function Signatory() {
  const inputCardData = {
    signatory: {
      title: 'Signatory',
      titleInput: {
        label: 'Enter signatory name',
        type: 'text',
        setValue: e => console.log(e),
        placeholder: 'ActionAid UK',
      },
      data: [
        {
          label: 'Publisher name',
          type: 'text',
          setValue: e => console.log(e),
          placeholder: 'AIDS found',
        },
        {
          label: 'Organisation Type',
          type: 'dropdown',
          setValue: e => console.log(e),
          options: orgTypeOptions,
        },
        {
          label: 'Publisher Identifier (from IATI Registry)',
          type: 'text',
          setValue: e => console.log(e),
          placeholder: '2423532',
        },
        {
          label: 'IATI Organisation Reference ',
          type: 'text',
          setValue: e => console.log(e),
          placeholder: 'No Data',
        },
      ],
    },
    financial: {
      title: 'Financial',
      data: [
        {
          label: 'Incoming financial tracability (Yes/No/N.A)',
          type: 'dropdown',
          setValue: e => console.log(e),
          options: [
            {
              label: 'Yes',
              value: 'Yes',
            },
            {
              label: 'No',
              value: 'No',
            },
            {
              label: 'N.A',
              value: 'N.A',
            },
          ],
        },
        {
          label: 'FTS Reporter (Yes/No/N.A)',
          type: 'dropdown',
          setValue: e => console.log(e),
          options: [
            {
              label: 'Yes',
              value: 'Yes',
            },
            {
              label: 'No',
              value: 'No',
            },
            {
              label: 'N.A',
              value: 'N.A',
            },
          ],
        },
        {
          label: 'Reporting to FTS via IATI(Yes/No/N.A/PILOT)',
          type: 'dropdown',
          setValue: e => console.log(e),
          options: [
            {
              value: 'Yes',
              label: 'Yes',
            },
            {
              label: 'No',
              value: 'No',
            },
            {
              label: 'N.A',
              value: 'N.A',
            },
            {
              label: 'PILOT',
              value: 'PILOT',
            },
          ],
        },
        {
          label: 'Reports to European Union (EDRIS)',
          type: 'dropdown',
          setValue: e => console.log(e),
          options: [
            {
              label: 'Yes',
              value: 'Yes',
            },
            {
              label: 'No',
              value: 'No',
            },
            {
              label: 'N.A',
              value: 'N.A',
            },
          ],
        },
      ],
    },
    descriptive: {
      title: 'Descriptive',
      data: [
        {
          label: 'URL to publisher web page or document for supplementary info',
          type: 'text',
          setValue: e => console.log(e),
          placeholder: 'No Data',
        },
        {
          label: 'First Published Date or blank if not publishing yet',
          type: 'text',
          setValue: e => console.log(e),
          placeholder: '01/01/1993',
        },
      ],
    },
  };

  return (
    <SignatoryLayout
      financial={inputCardData.financial}
      descriptive={inputCardData.descriptive}
      signatory={inputCardData.signatory}
    />
  );
}
