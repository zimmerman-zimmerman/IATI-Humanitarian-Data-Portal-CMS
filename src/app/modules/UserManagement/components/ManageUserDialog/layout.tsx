import React from 'react';
import { ManageDialogModel } from './models';

/* consts */
import { userRoles } from 'app/__consts__/generalConsts';

/* components */
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FormPasswordField } from 'app/components/inputs/textfields/FormPasswordField';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { SimpleSelect } from 'app/components/inputs/Select/SimpleSelect';

export const ManageDialogLayout = (props: ManageDialogModel) => {

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <FormSingleLineField
          fullWidth
          label="Email"
          id="add-email"
          value={props.email}
          setValue={props.setEmail}
        />
        <FormSingleLineField
          fullWidth
          label="username"
          id="add-username"
          value={props.username}
          setValue={props.setUsername}
        />
        {!props.editUser && (
          <FormPasswordField
            fullWidth
            label="Password"
            id="login-password"
            value={props.password}
            showPass={props.showPass}
            setValue={props.setPassword}
            setShowPass={props.setShowPass}
          />
        )}
        <SimpleSelect
          fullWidth
          id="select-role"
          label="Role"
          options={[
            { value: userRoles.reg, label: 'Regular' },
            { value: userRoles.admin, label: 'Administrator' },
          ]}
          value={props.role}
          setValue={props.setRole}
        />
      </DialogContent>
      <DialogActions>
        <ContainedButton
          backgroundColor="#ff6961"
          // margin="0 auto 0 8px"
          text="Cancel"
          onClick={() => props.handleClose()}
        />
        <ContainedButton
          // margin="0 8px 0 auto"
          disabled={
            props.email.length === 0 ||
            props.username.length === 0 ||
            props.password.length === 0
          }
          text={props.submitButText}
          onClick={() => props.submitAction()}
        />
      </DialogActions>
    </Dialog>
  );
};
