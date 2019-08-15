import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthLayout } from 'app/modules/SignIn/layout';

function Auth(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  return (
    <AuthLayout
      email={email}
      password={password}
      showPass={showPass}
      setEmail={setEmail}
      setPassword={setPassword}
      setShowPass={setShowPass}
      history={props.history}
    />
  );
}

export const SignIn = withRouter(Auth);
