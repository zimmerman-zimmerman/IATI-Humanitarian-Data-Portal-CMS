import React from 'react';
import { AddUserModel } from './models';

/* components */
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FormPasswordField } from 'app/components/inputs/textfields/FormPasswordField';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { SimpleSelect } from 'app/components/inputs/Select/SimpleSelect';

export const ManageUserDialog = (props: AddUserModel) => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('regular');
  const [showPass, setShowPass] = React.useState(false);

  const submitButText = props.editUser ? 'Save' : 'Add';
  const submitAction = props.editUser
    ? () =>
        props.editUserAction({
          _id: props.editUser && props.editUser._id,
          email,
          name: username,
          role
        })
    : () => props.addUser({ email, name: username, password, role });
  const title = props.editUser ? 'Edit User' : 'Add User';

  React.useEffect(() => {
    if (props.editUser) {
      setEmail(props.editUser.email);
      setUsername(props.editUser.name);
      setRole(props.editUser.role);
      setPassword('doesnt matter');
    }
  }, [props.editUser]);

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <FormSingleLineField
          fullWidth
          label="Email"
          id="add-email"
          value={email}
          setValue={setEmail}
        />
        <FormSingleLineField
          fullWidth
          label="username"
          id="add-username"
          value={username}
          setValue={setUsername}
        />
        {!props.editUser && (
          <FormPasswordField
            fullWidth
            label="Password"
            id="login-password"
            value={password}
            showPass={showPass}
            setValue={setPassword}
            setShowPass={setShowPass}
          />
        )}
        <SimpleSelect
          fullWidth
          id="select-role"
          label="Role"
          options={[
            { value: 'regular', label: 'Regular' },
            { value: 'admin', label: 'Administrator' },
          ]}
          value={role}
          setValue={setRole}
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
            email.length === 0 ||
            username.length === 0 ||
            password.length === 0
          }
          text={submitButText}
          onClick={submitAction}
        />
      </DialogActions>
    </Dialog>
  );
};
