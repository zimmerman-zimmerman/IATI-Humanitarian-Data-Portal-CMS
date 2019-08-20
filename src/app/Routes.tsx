/* base */
import React, { Suspense } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

/* consts */
import { userRoles } from './__consts__/generalConsts';

/* interface */
import { User } from 'app/state/api/interfaces/userInterface';

/* hooks */
import { useStoreState } from './state/store/hooks';

/* modules */
import { PageLoader } from 'app/modules/common/PageLoader';
import { SignIn } from 'app/modules/SignIn';
import { UserManagement } from 'app/modules/UserManagement';
import { AddSignatory } from 'app/modules/AddSignatory';

// util function that redirects a user to the login page
// if they're not signed-in
// other wise returns the provided component
function redirectUnAuth<ReactModule>(
  component: ReactModule,
  user: User | null,
  role?: string
) {
  if (!user) {
    return <Redirect to="/login" />;
  }

  if (role && user.role !== role) {
    return <Redirect to="/dashboard" />;
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
          render={() =>
            redirectUnAuth(
              <div>
                {' '}
                <Link to="/management"> Go to user management </Link>{' '}
              </div>,
              user
            )
          }
        />

        <Route
          exact
          path="/management"
          render={() =>
            redirectUnAuth(<UserManagement />, user, userRoles.admin)
          }
        />

        <Route exact path="/add-signatory" render={() => <AddSignatory />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
