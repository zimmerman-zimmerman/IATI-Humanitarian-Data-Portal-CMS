import { User } from 'app/state/api/interfaces/userInterface';

export type LayoutModel = {
  open: boolean;
  editUser: User | null;
  handleOpen: Function;
  handleClose: Function;
  allUsers: Array<User>;
  handleAddUser: Function;
  deleteUser: Function;
  handleEditUser: Function;
  handleUserUpdated: Function;
};
