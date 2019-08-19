import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavSideBarLayout } from 'app/components/navigation/NavSideBar/layout';

function NavSideBarComp() {
  return <NavSideBarLayout />;
}

export const NavSideBar = withRouter(NavSideBarComp);
