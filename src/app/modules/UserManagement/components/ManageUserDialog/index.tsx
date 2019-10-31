import React from 'react';
import { AddUserModel } from './models';
import { ManageDialogLayout } from './layout';

export function ManageUserDialog (props: AddUserModel) {
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
    <ManageDialogLayout
      open={props.open}
      handleClose={props.handleClose}
      title={title}
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      editUser={props.editUser}
      password={password}
      showPass={showPass}
      setPassword={setPassword}
      setShowPass={setShowPass}
      role={role}
      setRole={setRole}
      submitButText={submitButText}
      submitAction={submitAction}
    />
  );
}
