import { action, thunk } from 'easy-peasy';
import { API } from 'space-api';

import { SpaceCloudModel, ErrorResponse } from 'app/state/api/interfaces';
import {
  loginPayload,
  UserResponse,
} from 'app/state/api/interfaces/userInterface';

export const api = new API(
  process.env.REACT_APP_PROJECT_ID,
  process.env.REACT_APP_SPACE_CLOUD_URL
);

export const db = api.Mongo();

// so this basically describes the redux initial values
// and redux actions for the generic space cloud model
export const spaceCloud: SpaceCloudModel = {
  user: null,
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setUser: action((state, payload: UserResponse) => {
    api.setToken(payload.data.token);
    state.user = payload.data.user;
  }),
  login: thunk(async (action, payload: loginPayload) => {
    const res = await db.signIn(payload.email, payload.password);

    if (res.status !== 200) {
      action.setError(res);
    } else {
      // we set the user data
      action.setUser(res);

      // and load the dashboard
      payload.history && payload.history.push('/dashboard');
    }
  }),
};
