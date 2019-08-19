import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignatoriesLayout } from 'app/modules/Signatories/layout';

function SignatoriesPage() {
  return <SignatoriesLayout />;
}

export const Signatories = withRouter(SignatoriesPage);
