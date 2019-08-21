/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import { Typography, Grid } from '@material-ui/core';
import { NavSideBarItem } from 'app/components/navigation/NavSideBar/common/NavSideBarItem';
import color from 'app/theme/color';

const MenuContainer = styled.div`
  display: flex;
  overflow-y: auto;
  max-height: 100vh;
  flex-direction: column;
  padding: 24px 0 24px 24px;
  height: calc(100vh - 48px);
  justify-content: space-between;
  background-color: ${color.whiteOrFontlightbase};
  position: absolute;
  top: 0;
  left: 0;
  min-width: 200px;
`;

const Version = styled(Typography)`
  && {
    color: ${color.greydark20OrFontsecondary};
  }
`;

export const NavSideBarLayout = () => {
  return (
    <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
      <MenuContainer>
        <NavSideBarItem>Sign out</NavSideBarItem>
        {/* main navigation container */}
        <Grid container direction="column" justify="center">
          <NavSideBarItem to="/signatories">Signatories</NavSideBarItem>
          <NavSideBarItem to="/settings">Settings</NavSideBarItem>
          <NavSideBarItem to="/faq">FAQ Text</NavSideBarItem>
          <NavSideBarItem to="/CCTRIs">CCTRIs Text</NavSideBarItem>
          <NavSideBarItem to="/tooltips">Tooltips Text</NavSideBarItem>
        </Grid>
        <Version variant="caption">V1</Version>
      </MenuContainer>
    </Grid>
  );
};
