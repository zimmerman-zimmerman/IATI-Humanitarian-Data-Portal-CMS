import React from 'react';
import {
  fade,
  Theme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import SelectBase, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

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
    select: {
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.grey[40],
      border: '1px solid transparent',
      fontSize: 16,
      padding: '20px 12px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: 'Inter',
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(SelectBase);

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
    <FormControl variant="filled" fullWidth={fullWidth}>
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>
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
