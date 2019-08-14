import { History } from 'history';

export type LayoutModel = {
  username: string;
  password: string;
  showPass: boolean;
  setUsername: Function;
  setPassword: Function;
  setShowPass: Function;
  history: History;
};
