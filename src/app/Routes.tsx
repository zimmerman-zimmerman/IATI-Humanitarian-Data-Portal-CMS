import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';

import Auth from 'app/modules/auth';

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Auth />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
