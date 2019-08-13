import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
  text: string;
  disabled?: boolean;
  fullWidth?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: 'fit-content',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    input: {
      display: 'none',
    },
  })
);

export const ContainedButton = (props: Props) => {
  const { text, ...otherProps } = props;
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button} {...otherProps}>
      {text}
    </Button>
  );
};

