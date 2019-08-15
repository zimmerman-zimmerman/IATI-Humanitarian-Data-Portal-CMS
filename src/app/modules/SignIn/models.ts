import { History } from 'history';

export type LayoutModel = {
  email: string;
  password: string;
  showPass: boolean;
  setEmail: Function;
  setPassword: Function;
  setShowPass: Function;
  history: History;
};
