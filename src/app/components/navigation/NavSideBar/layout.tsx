/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import { Typography, Grid, Box } from '@material-ui/core';
import { NavSideBarItem } from 'app/components/navigation/NavSideBar/common/NavSideBarItem';
import color from 'app/theme/color';
import { DebugBox } from 'app/utils/layout';

const MenuContainer = styled.div`
  width: 205px;
  height: calc(100vh - 48px);
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 24px 24px;
  background-color: ${color.whiteOrFontlightbase};
`;

const Version = styled(Typography)`
  && {
    color: ${color.greydark20OrFontsecondary};
  }
`;

export const NavSideBarLayout = () => {
  return (
    <MenuContainer>
      <NavSideBarItem>Sign out</NavSideBarItem>
      {/** main navigation container */}
      <Grid container direction="column" justify="center">
        <NavSideBarItem>Signatories</NavSideBarItem>
        <NavSideBarItem>Settings</NavSideBarItem>
        <NavSideBarItem>FAQ Text</NavSideBarItem>
        <NavSideBarItem>CCTRIs Text</NavSideBarItem>
        <NavSideBarItem>Tooltips Text</NavSideBarItem>
      </Grid>
      <Version variant="caption">V1</Version>
    </MenuContainer>
  );
};
