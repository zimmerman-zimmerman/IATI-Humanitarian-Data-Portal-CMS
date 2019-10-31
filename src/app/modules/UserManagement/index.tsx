/* base */
import React, { useEffect } from 'react';
import { UserManLayout } from './layout';

/* component store */
import { managementStore } from './store';
import { useStoreState } from 'app/state/store/hooks';

export function UserManagement() {
  const [open, setOpen] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);

  const [state, actions] = managementStore();

  const currUser = useStoreState(globalState => globalState.spaceCloud.user);

  // so basically this loads all users initiall
  // and whenever the added user variable updates
  useEffect(() => {
    actions.getAllUsers();
  }, [state.userAdded, state.userDeleted, state.userUpdated]);

  function handleOpen() {
    setEditUser(null);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAddUser(payload) {
    actions.createAccount(payload);
    setOpen(false);
  }

  function handleEditUser(user) {
    setEditUser(user);
    setOpen(true);
  }

  function handleUserUpdated(newData) {
    actions.updateUser(newData);
    setOpen(false);
  }

  function handleDeleteUser(id) {
    if (currUser && currUser._id === id) {
      if (confirm('Are you sure you want to delete yourself?')) {
        actions.deleteUser(id);
      }
    } else {
      actions.deleteUser(id);
    }
  }

  return (
    <UserManLayout
      open={open}
      editUser={editUser}
      handleOpen={handleOpen}
      handleClose={handleClose}
      allUsers={state.allUsers}
      handleAddUser={handleAddUser}
      deleteUser={handleDeleteUser}
      handleEditUser={handleEditUser}
      handleUserUpdated={handleUserUpdated}
    />
  );
}
