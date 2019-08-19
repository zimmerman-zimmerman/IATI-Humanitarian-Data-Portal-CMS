/* base */
import React, { useEffect } from 'react';
import { UserManLayout } from './layout';

/* component store */
import { managementStore } from './store';

export function UserManagement() {
  const [state, actions] = managementStore();

  // so basically this loads all users initiall
  // and whenever the added user variable updates
  useEffect(() => {
    actions.getAllUsers();
  }, [state.userAdded, state.userDeleted, state.userUpdated]);

  return (
    <UserManLayout
      allUsers={state.allUsers}
      addUser={actions.createAccount}
      deleteUser={actions.deleteUser}
      editUserAction={actions.updateUser}
    />
  );
}
