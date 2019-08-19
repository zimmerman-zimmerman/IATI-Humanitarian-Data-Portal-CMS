import { action, createComponentStore, thunk } from 'easy-peasy';
import { db } from 'app/state/api/actionsReducers';
import { cond } from 'space-api';

/* interfaces */
import {
  AllUserResponse,
  EditPayload,
  ManagementModel,
  signUpPayload,
} from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';
import { User } from 'app/state/api/interfaces/userInterface';

const management: ManagementModel = {
  allUsers: [],
  error: null,
  userAdded: null,
  userDeleted: null,
  userUpdated: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setUserDeleted: action((state, payload: string) => {
    state.userDeleted = payload;
  }),
  setUserUpdated: action((state, payload: User) => {
    state.userUpdated = payload;
  }),
  setUserAdded: action((state, payload: string) => {
    state.userAdded = payload;
  }),
  setAllUsers: action((state, payload: AllUserResponse) => {
    state.allUsers = payload.data.users;
  }),
  getAllUsers: thunk(async action => {
    const res = await db.profiles();

    if (res.status === 200) {
      action.setAllUsers(res);
    }
  }),
  createAccount: thunk(async (action, payload: signUpPayload) => {
    const res = await db.signUp(
      payload.email,
      payload.name,
      payload.password,
      payload.role
    );
    if (res.status !== 200) {
      action.setError(res);
    } else {
      action.setUserAdded(res.data.user._id);
    }
  }),
  deleteUser: thunk(async (action, id: string) => {
    const res = await db
      .deleteOne('users')
      .where(cond('_id', '==', id))
      .apply();

    if (res.status === 200) {
      action.setUserDeleted(id);
    } else {
      action.setError(res);
    }
  }),
  updateUser: thunk(async (action, payload: EditPayload) => {
    const { _id, ...restPayload } = payload;

    const res = await db
      .updateOne('users')
      .where(cond('_id', '==', _id))
      .set({ ...restPayload })
      .apply();

    if (res.status === 200) {
      action.setUserUpdated(payload);
    } else {
      action.setError(res);
    }
  }),
};

export const managementStore = createComponentStore(management);
