import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SingleLineTextField from 'app/components/inputs/textfields/SingleLineTextField';
import PasswordTextField from 'app/components/inputs/textfields/PasswordTextField';
import ContainedButton from 'app/components/inputs/buttons/ContainedButton';
import { LayoutModel } from 'app/modules/auth/models';

const CContainer = styled(Container)`
  && {
    left: 0;
    height: 100%;
    display: flex;
    overflow-y: auto;
    position: absolute;
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
const InputForm = (props: LayoutModel) => {
  return (
    <CContainer maxWidth="sm">
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
          disabled={props.username === '' || props.password === ''}
        />
      </Form>
    </CContainer>
  );
};

export default InputForm;
