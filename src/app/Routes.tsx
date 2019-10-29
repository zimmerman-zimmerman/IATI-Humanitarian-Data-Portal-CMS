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
import Page from 'app/modules/common/Page';
import { PageLoader } from 'app/modules/common/PageLoader';
import { UserManagement } from 'app/modules/UserManagement';
import { Faq } from 'app/modules/Faq';
// import { AddSignatory } from 'app/modules/AddSignatory';
import { Signatories } from 'app/modules/Signatories';
import { Signatory } from 'app/modules/Signatory';
import { Tooltips } from 'app/modules/Tooltips';
import { CCTRI } from 'app/modules/CCTRI';
import { SignatoryProgress } from 'app/modules/SignatoryProgress';

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
              <Page>
                <Link to="/management"> Go to user management </Link>{' '}
              </Page>,
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

        <Route exact path="/faq" render={() => redirectUnAuth(<Faq />, user)} />

        <Route
          exact
          path="/add-signatory"
          render={() => redirectUnAuth(<Signatory />, user)}
        />

        <Route
          exact
          path="/edit-signatory/:id"
          render={() => redirectUnAuth(<Signatory />, user)}
        />

        <Route
          exact
          path="/signatories"
          render={() => redirectUnAuth(<Signatories />, user)}
        />

        <Route
          exact
          path="/signatoryProgress"
          render={() => redirectUnAuth(<SignatoryProgress />, user)}
        />

        <Route
          exact
          path="/tooltips"
          render={() => redirectUnAuth(<Tooltips />, user)}
        />

        <Route
          exact
          path="/CCTRIs"
          render={() => redirectUnAuth(<CCTRI />, user)}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
