/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import { Typography, Grid, Box } from '@material-ui/core';
import { NavSideBarItem } from 'app/components/navigation/NavSideBar/common/NavSideBarItem';
import color from 'app/theme/color';
import { DebugBox } from 'app/utils/layout';

const MenuContainer = styled.div`
  display: flex;
  overflow-y: auto;
  max-height: 100vh;
  flex-direction: column;
  padding: 24px 0 24px 24px;
  height: calc(100vh - 48px);
  justify-content: space-between;
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
