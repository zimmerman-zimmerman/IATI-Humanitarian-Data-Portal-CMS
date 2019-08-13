import React from 'react';
import AuthLayout from 'app/modules/auth/layout';

export default function Auth() {
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
    />
  );
}
