import { API } from 'space-api';
import { Action, Thunk } from 'easy-peasy';
import {
  loginPayload,
  signUpPayload,
  User,
  UserResponse,
} from './userInterface';

export interface ErrorResponse {
  data: {
    error: string;
  };
  status: number;
}

export interface SpaceCloudModel {
  user: User | null;
  error: string | null;
  setError: Action<SpaceCloudModel, ErrorResponse>;
  setUser: Action<SpaceCloudModel, UserResponse>;
  login: Thunk<SpaceCloudModel, loginPayload>;
  createAccount: Thunk<SpaceCloudModel, signUpPayload>;
}
