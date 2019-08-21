import React from 'react';
import Grid from '@material-ui/core/Grid';
import { InputsCardModel } from './model';

/* components */
import { SingleLineTextField } from 'app/components/inputs/textfields/SingleLineTextField';
import { SimpleSelect } from 'app/components/inputs/Select/SimpleSelect';
import styled from 'styled-components';

/* styles */
import { Typography } from 'app/theme';

const CardGrid = styled(Grid)`
  padding: 32px; 96px; 56px; 32px;
`;

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
          <SingleLineTextField
            fullWidth
            label={props.titleInput.label}
            id={`text-${props.title}-title-input`}
            placeholder={props.titleInput.placeholder || ''}
            defaultValue={props.titleInput.defValue}
            setValue={props.titleInput.setValue}
          />
        ) : (
          <CardTitle>{props.title}</CardTitle>
        )}
      </Grid>
      {props.data.map((input, index) => (
        <Grid item xs={6}>
          {input.type === 'dropdown' ? (
            <SimpleSelect
              fullWidth
              id={`select-${props.title}-${index}`}
              label={input.label}
              options={input.options || []}
              value={input.defValue}
              setValue={input.setValue}
            />
          ) : (
            <SingleLineTextField
              fullWidth
              label={input.label}
              id={`text-${props.title}-${index}`}
              placeholder={input.placeholder || ''}
              defaultValue={input.defValue}
              setValue={input.setValue}
            />
          )}
        </Grid>
      ))}
    </CardGrid>
  );
};
