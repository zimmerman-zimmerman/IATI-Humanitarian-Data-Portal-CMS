/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { InputsCardModel } from './model';

/* components */
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { SimpleSelect } from 'app/components/inputs/Select/SimpleSelect';
import styled from 'styled-components';

/* styles */
import { Typography } from 'app/theme';
import DateField from '../inputs/DateInputField';

export const CardGrid = styled(Grid)`
  padding: 32px;96px; 56px; 32px;
`;

//TODO: this should be just MuiTypography component
//But no solid typography theme defined in visual design
const CardTitle = styled.div`
  font-family: ${Typography.fontFamily};
  font-size: 23.9px;
  font-weight: ${Typography.fontWeightMedium};
`;

export const InputsCard = (props: InputsCardModel) => {
  return (
    <CardGrid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      alignContent="flex-start"
      spacing={3}
    >
      <Grid item xs={12}>
        {props.titleInput ? (
          props.titleInput.type === 'date' ? (
            <DateField
              value={props.titleInput.value}
              label={props.titleInput.label}
              onChange={props.titleInput.setValue}
              disabled={false}
              fullWidth={false}
            />
          ) : (
            <SingleMultiLineTextField
              fullWidth
              label={props.titleInput.label}
              id={`text-${props.title}-title-input`}
              placeholder={props.titleInput.placeholder || ''}
              value={props.titleInput.value}
              setValue={props.titleInput.setValue}
            />
          )
        ) : (
          <CardTitle>{props.title}</CardTitle>
        )}
      </Grid>
      {props.data.map((input, index) => (
        <Grid item xs={6} md={6}>
          {input.type === 'dropdown' ? (
            <SimpleSelect
              fullWidth
              key={`select-${props.title}-${index}`}
              id={`select-${props.title}-${index}`}
              label={input.label}
              options={input.options || []}
              value={input.value}
              setValue={input.setValue}
            />
          ) : (
            <SingleMultiLineTextField
              fullWidth
              label={input.label}
              key={`text-${props.title}-${index}`}
              id={`text-${props.title}-${index}`}
              placeholder={input.placeholder || ''}
              value={input.value}
              setValue={input.setValue}
            />
          )}
        </Grid>
      ))}
    </CardGrid>
  );
};
