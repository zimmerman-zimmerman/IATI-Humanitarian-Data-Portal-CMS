import React from 'react';
import Page from 'app/modules/common/Page';
import { LayoutModel } from 'app/modules/UserManagement/models';
import styled from 'styled-components';

/* components */
import Grid from '@material-ui/core/Grid';
import { UserCard } from './components/UserCard';
import { ContainedButton } from '../../components/inputs/buttons/ContainedButton';
import { ManageUserDialog } from './components/ManageUserDialog';

const StyledGrid = styled(Grid)`
  && {
    padding: 20px;
  }
`;

export const UserManLayout = (props: LayoutModel) => {
  const [open, setOpen] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);

  function handleOpen() {
    setEditUser(null);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAddUser(payload) {
    props.addUser(payload);
    setOpen(false);
  }

  function handleEditUser(user) {
    setEditUser(user);
    setOpen(true);
  }

  return (
    <Page title="User management">
      <ManageUserDialog
        editUserAction={props.editUserAction}
        editUser={editUser}
        open={open}
        handleClose={handleClose}
        addUser={handleAddUser}
      />
      <StyledGrid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <ContainedButton
            text="Add User"
            fullWidth
            onClick={() => handleOpen()}
          />
        </Grid>
        {props.allUsers.map(user => (
          <UserCard
            name={user.name}
            onDelete={() => props.deleteUser(user._id)}
            onEdit={() => handleEditUser(user)}
          />
        ))}
      </StyledGrid>
    </Page>
  );
};
