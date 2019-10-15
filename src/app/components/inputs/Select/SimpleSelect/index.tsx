import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import SelectBase, { SelectProps } from '@material-ui/core/Select';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';

export interface Props extends SelectProps {
  id: string;
  label: string;
  value?: string;
  setValue: Function;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = withStyles((theme: Theme) =>
  createStyles({
    select: getInputGeneralStyle(theme),
  })
)(SelectBase);

const SelectLabel = styled.div`
  font-size: 9px;
  margin-bottom: 11px;
  font-weight: normal;
  font-family: 'Inter';
  color: rgba(0, 0, 0, 0.87);
  -webkit-font-smoothing: antialiased;
`;

export const SimpleSelect = (props: Props) => {
  const {
    value,
    setValue,
    label,
    id,
    options,
    fullWidth,
    ...otherProps
  } = props;
  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <SelectLabel>{label}</SelectLabel>
      <Select
        native
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        input={<FilledInput name={id} id={id} />}
        {...otherProps}
      >
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Select>
    </FormControl>
  );
};
