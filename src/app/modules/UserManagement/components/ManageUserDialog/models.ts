import { User } from 'app/state/api/interfaces/userInterface';

export type AddUserModel = {
  open: boolean;
  handleClose: Function;
  addUser: Function;
  editUser: User | null;
  editUserAction: Function;
};

export type ManageDialogModel = {
  open: boolean;
  handleClose: Function;
  title: string;
  email: string;
  setEmail: Function;
  username: string;
  setUsername: Function;
  editUser: User | null;
  password: string;
  showPass: boolean;
  setPassword: Function;
  setShowPass: Function;
  role: string;
  setRole: Function;
  submitButText: string;
  submitAction: Function;
};
