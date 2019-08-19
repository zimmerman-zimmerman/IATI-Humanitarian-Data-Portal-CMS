import { History } from 'history';

export interface User {
  email: string;
  name: string;
  role: string;
  _id: string;
}

export interface UserResponse {
  data: {
    token: string;
    user: User;
  };
  status: number;
}

export interface loginPayload {
  email: string;
  password: string;
  history?: History;
}
