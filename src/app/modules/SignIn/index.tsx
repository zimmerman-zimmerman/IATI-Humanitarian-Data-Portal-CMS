import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthLayout } from 'app/modules/SignIn/layout';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function Auth(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const loginAction = useStoreActions(actions => actions.spaceCloud.login);

  const login = () => loginAction({ email, password, history: props.history });

  const user = useStoreState(state => state.spaceCloud.user);

  return (
    <AuthLayout
      email={email}
      password={password}
      showPass={showPass}
      setEmail={setEmail}
      setPassword={setPassword}
      setShowPass={setShowPass}
      login={login}
      user={user}
    />
  );
}

export const SignIn = withRouter(Auth);
