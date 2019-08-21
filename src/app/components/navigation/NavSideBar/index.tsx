import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavSideBarLayout } from 'app/components/navigation/NavSideBar/layout';
import { SignIn } from 'app/modules/SignIn';

function NavSideBarComp(props) {
  return props.location.pathname !== '/login' ? (
    <NavSideBarLayout />
  ) : (
    <SignIn />
  );
}

export const NavSideBar = withRouter(NavSideBarComp);
