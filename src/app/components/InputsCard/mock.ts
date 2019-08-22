import { InputsCardModel } from './model';

export const mockCardData : InputsCardModel = {
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
};
