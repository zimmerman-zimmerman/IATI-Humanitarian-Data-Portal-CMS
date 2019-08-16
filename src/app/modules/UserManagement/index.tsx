/* base */
import React, { useEffect } from 'react';
import { UserManLayout } from './layout';

/* component store */
import { managementStore } from './store';

// TODO: add proper user role control and update default user role
//  add storybook
//  fix up edit user functionality something be lagging there

export function UserManagement() {
  const [state, actions] = managementStore();

  // so basically this loads all users initiall
  // and whenever the added user variable updates
  useEffect(() => {
    console.log('checking updates');
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
