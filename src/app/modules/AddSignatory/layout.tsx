/* core */
import React from 'react';
import Page from 'app/modules/common/Page';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/* components */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { Autocomplete } from 'app/components/inputs/Autocomplete';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '50px 80px',
    },
    button: {
      position: 'absolute',
      margin: theme.spacing(1),
    },
    icon: {
      fontSize: '4rem',
      color: theme.palette.text.primary,
    },
  })
);

export const AddSignatoryLayout = () => {
  const classes = useStyles();
  return (
    <Page title="Add Signatory">
      <IconButton className={classes.button}>
        <ArrowBack className={classes.icon} />
      </IconButton>
      <Grid container direction="column" justify="center">
        <Paper className={classes.paper}>
          <Autocomplete />
          <ContainedButton
            text="Add Signatory"
            onClick={() => console.log('added signatory')}
          />
        </Paper>
      </Grid>
    </Page>
  );
};
