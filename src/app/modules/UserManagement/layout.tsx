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
  return (
    <Page title="User management">
      <ManageUserDialog
        editUserAction={props.handleUserUpdated}
        editUser={props.editUser}
        open={props.open}
        handleClose={props.handleClose}
        addUser={props.handleAddUser}
      />
      <StyledGrid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        alignContent="flex-start"
        spacing={3}
      >
        <Grid item xs={12}>
          <ContainedButton
            text="Add User"
            fullWidth
            onClick={() => props.handleOpen()}
          />
        </Grid>
        {props.allUsers.map(user => (
          <UserCard
            name={user.name}
            onDelete={() => props.deleteUser(user._id)}
            onEdit={() => props.handleEditUser(user)}
          />
        ))}
      </StyledGrid>
    </Page>
  );
};
