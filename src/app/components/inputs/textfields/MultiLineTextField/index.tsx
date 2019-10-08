import React from 'react';
import {
  fade,
  Theme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.grey[40],
      border: '1px solid transparent',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: 'Inter',
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
    inputMultiline: {
      minHeight: '160px',
      paddingBottom: '30px',
      lineHeight: '2rem',
    },
  })
)(InputBase);

export const MultiLineTextField = props => {
  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel shrink htmlFor={props.id}>
        {props.label}
      </InputLabel>
      <Input {...props} onChange={e => props.setValue(e.target.value)} />
    </FormControl>
  );
};
