import { User } from 'app/state/api/interfaces/userInterface';

export type LayoutModel = {
  allUsers: Array<User>;
  addUser: Function;
  deleteUser: Function;
  editUserAction: Function;
};
