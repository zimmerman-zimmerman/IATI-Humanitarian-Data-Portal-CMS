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
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface Props extends InputBaseProps {
  label: string;
  value: string;
  showPass: boolean;
  setValue: Function;
  setShowPass: Function;
}

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
  })
)(InputBase);

const PasswordTextField = (props: Props) => {
  const { value, showPass, setShowPass, setValue, ...otherProps } = props;
  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel shrink htmlFor={props.id}>
        {props.label}
      </InputLabel>
      <Input
        {...otherProps}
        type={props.showPass ? 'text' : 'password'}
        value={value}
        onChange={e => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={value === ''}
              onClick={e => setShowPass(!showPass)}
              aria-label="Toggle password visibility"
            >
              {showPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordTextField;
