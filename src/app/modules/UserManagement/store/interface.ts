import { loginPayload, User } from 'app/state/api/interfaces/userInterface';
import { Action, Thunk } from 'easy-peasy';
import { ErrorResponse } from 'app/state/api/interfaces';

export interface signUpPayload extends loginPayload {
  name: string;
  role: string;
}

export interface AllUserResponse {
  data: {
    users: Array<User>;
  };
  status: number;
}

export interface EditPayload extends signUpPayload {
  _id: string;
}

export interface ManagementModel {
  allUsers: Array<User>;
  userAdded: string | null;
  userDeleted: string | null;
  userUpdated: User | null;
  error: string | null;
  setUserDeleted: Action<ManagementModel, string>;
  setUserUpdated: Action<ManagementModel, User>;
  setError: Action<ManagementModel, ErrorResponse>;
  setUserAdded: Action<ManagementModel, string>;
  setAllUsers: Action<ManagementModel, AllUserResponse>;
  getAllUsers: Thunk<ManagementModel>;
  createAccount: Thunk<ManagementModel, signUpPayload>;
  deleteUser: Thunk<ManagementModel, string>;
  updateUser: Thunk<ManagementModel, EditPayload>;
}
