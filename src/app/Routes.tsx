import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';

import { SignIn } from 'app/modules/SignIn';

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <SignIn />} />
        <Route exact path="/dashboard" render={() => <div> Dashboard </div>} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
