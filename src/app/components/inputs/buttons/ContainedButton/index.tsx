import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
  text: string;
  margin?: string;
  backgroundColor?: string;
  onClick(): void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: props => ({
      margin: props.margin || '0',
      width: props.fullWidth ? '100%' : 'fit-content',
      color: theme.palette.primary.contrastText,
      backgroundColor: props.backgroundColor || theme.palette.primary.main,
    }),
    input: {
      display: 'none',
    },
  })
);

export const ContainedButton = (props: Props) => {
  const {
    text,
    margin,
    backgroundColor,
    fullWidth,
    icon,
    ...otherProps
  } = props;
  const classes = useStyles({ margin, backgroundColor, fullWidth });
  return (
    <Button variant="contained" className={classes.button} {...otherProps}>
      {text}
      {icon}
    </Button>
  );
};
