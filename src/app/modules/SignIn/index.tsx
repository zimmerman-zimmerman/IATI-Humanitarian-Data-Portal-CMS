import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthLayout } from 'app/modules/SignIn/layout';

function Auth(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  return (
    <AuthLayout
      username={username}
      password={password}
      showPass={showPass}
      setUsername={setUsername}
      setPassword={setPassword}
      setShowPass={setShowPass}
      history={props.history}
    />
  );
}

export const SignIn = withRouter(Auth);
