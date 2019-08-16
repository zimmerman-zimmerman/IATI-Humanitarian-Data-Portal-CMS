import { User } from 'app/state/api/interfaces/userInterface';

export type AddUserModel = {
  open: boolean;
  handleClose: Function;
  addUser: Function;
  editUser: User | null;
  editUserAction: Function;
};
