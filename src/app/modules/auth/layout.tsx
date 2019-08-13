import React from 'react';
import Page from 'app/modules/common/Page';
import InputForm from 'app/modules/auth/common/InputForm';
import { LayoutModel } from 'app/modules/auth/models';

const AuthLayout = (props: LayoutModel) => {
  return (
    <Page title="Sign in">
      <InputForm {...props} />
    </Page>
  );
};

export default AuthLayout;
