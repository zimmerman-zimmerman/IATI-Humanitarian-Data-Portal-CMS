/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* core */
import React from 'react';

/* components */
import Papa from 'papaparse';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

/* utils */
import { insertTooltipsFromFile } from 'app/scripts/loadTooltips';

export function UploadDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const readInput = e => {
    Papa.parse(e.target.files[0], {
      complete: results => {
        setData(results.data);
        handleOpen();
      },
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <input
        type="file"
        accept=".csv"
        onChange={readInput}
        id="text-button-file"
        style={{ display: 'none' }}
        aria-labelledby="text-button-file-label"
      />
      <label htmlFor="text-button-file" id="text-button-file-label">
        <Button component="span" color="primary" variant="contained">
          Upload CSV
        </Button>
      </label>
      <br />
      <br />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          Upload tooltips via CSV file upload
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {data.length - 1} tooltip instances found! Proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              insertTooltipsFromFile(data, props.actions.getAllTooltips);
              handleClose();
            }}
            color="primary"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
