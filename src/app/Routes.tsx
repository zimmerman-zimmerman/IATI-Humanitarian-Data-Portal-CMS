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
import { UserManagement } from 'app/modules/UserManagement';
import { AddSignatory } from 'app/modules/AddSignatory';
import { Signatories } from 'app/modules/Signatories';

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

        <Route exact path="/login" render={() => <></>} />

        <Route
          exact
          path="/dashboard"
          render={() =>
            redirectUnAuth(
              <div>
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
        <Route exact path="/signatories" render={() => <Signatories />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
