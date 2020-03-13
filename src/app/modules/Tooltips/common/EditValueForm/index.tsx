import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '400px',
      padding: theme.spacing(2),
    },
    typography: {
      padding: theme.spacing(1),
    },
    valueDiv: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);

export function EditValueForm(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<string>(props.value);
  const handleClick = (event?) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <div className={classes.valueDiv}>
        {props.value}
        <IconButton onClick={handleClick}>
          <EditIcon />
        </IconButton>
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl} disablePortal>
        <ClickAwayListener onClickAway={handleClick}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>Label</Typography>
            <TextField
              fullWidth
              multiline
              rows="5"
              margin="normal"
              variant="filled"
              value={value}
              id="filled-multiline-flexible"
              onChange={e => setValue(e.target.value)}
            />
            <div>
              <ContainedButton
                text="Save"
                margin="10px 10px 0 0"
                backgroundColor="#30c2b0"
                onClick={() => {
                  props.updateValueOnDB(value);
                  props.updateValue(value);
                  handleClick();
                }}
              />
              <ContainedButton
                text="Cancel"
                margin="10px 0 0 0"
                backgroundColor="transparent"
                onClick={() => handleClick()}
              />
            </div>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
