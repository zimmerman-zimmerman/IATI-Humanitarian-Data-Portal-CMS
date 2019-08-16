/* base */
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

/* interface */
import { User } from 'app/state/api/interfaces/userInterface';

/* hooks */
import { useStoreState } from './state/store/hooks';

/* modules */
import { PageLoader } from 'app/modules/common/PageLoader';
import { SignIn } from 'app/modules/SignIn';
import { UserManagement } from 'app/modules/UserManagement';

// util function that redirects a user to the login page
// if they're not signed-in
// other wise returns the provided component
function redirectUnAuth<ReactModule>(
  component: ReactModule,
  user: User | null
) {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return component;
}

function Routes() {
  const user = useStoreState(state => state.spaceCloud.user);

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

        <Route exact path="/login" render={() => <SignIn />} />

        <Route
          exact
          path="/dashboard"
          render={() => redirectUnAuth(<div> Dashboard </div>, user)}
        />

        <Route
          exact
          path="/management"
          render={() => redirectUnAuth(<UserManagement />, user)}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
