/* base */
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
/* api */
import { client } from 'app/client';

/* components */
import { SingleLineTextField } from 'app/components/inputs/textfields/SingleLineTextField';
import { PasswordTextField } from 'app/components/inputs/textfields/PasswordTextField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { LayoutModel } from 'app/modules/SignIn/models';

const Container = styled.div`
  && {
    left: 0;
    height: 100vh;
    display: flex;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
`;

const Form = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Typography)`
  && {
    margin-bottom: 45px;
  }
`;

const Username = styled(SingleLineTextField)`
  && {
    margin-bottom: 45px;
  }
`;

const Password = styled(PasswordTextField)`
  && {
    margin-bottom: 45px;
  }
`;

export const InputForm = (props: LayoutModel) => {

  const signIn = () => {
    client.login(props.username, props.password).then(res => {
      if (!res.ack) {
        alert('Error logging in');
        return;
      }

      props.history.push('/dashboard');
    })
  };

  const signUp = () => {
    client.createAccount('elbartas321@gmail.com', props.username, props.password).then(res => {
      if (!res.ack) {
        alert('Error signing up');
        return;
      }

      alert('User created');
    })
  };

  return (
    <Container>
      <Form>
        <Header variant="h3">
          <span role="img" aria-label="emoji">
            👋
          </span>{' '}
          Hello
        </Header>
        <Username
          fullWidth
          label="Username"
          id="login-username"
          value={props.username}
          setValue={props.setUsername}
        />
        <Password
          fullWidth
          label="Password"
          id="login-password"
          value={props.password}
          showPass={props.showPass}
          setValue={props.setPassword}
          setShowPass={props.setShowPass}
        />
        <ContainedButton
          text="Sign in"
          onClick={signIn}
          disabled={props.username === '' || props.password === ''}
        />
        <ContainedButton
          text="Sign up"
          onClick={signUp}
          disabled={props.username === '' || props.password === ''}
        />
      </Form>
    </Container>
  );
};
