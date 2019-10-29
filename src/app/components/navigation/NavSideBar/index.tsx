import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStoreActions } from 'app/state/store/hooks';
import { NavSideBarLayout } from 'app/components/navigation/NavSideBar/layout';
import { SignIn } from 'app/modules/SignIn';

function NavSideBarComp(props) {
  const logoutAction = useStoreActions(actions => actions.spaceCloud.logout);
  const logout = () => logoutAction();
  return props.location.pathname !== '/login' ? (
    <NavSideBarLayout logout={logout} />
  ) : (
    <SignIn />
  );
}

export const NavSideBar = withRouter(NavSideBarComp);
