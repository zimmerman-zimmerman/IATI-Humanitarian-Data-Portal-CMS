/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import color from 'app/theme/color';
import { Typography, Grid } from '@material-ui/core';
import { navLinks } from 'app/components/navigation/NavSideBar/mock';
import { NavSideBarItem } from 'app/components/navigation/NavSideBar/common/NavSideBarItem';

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

export const NavSideBarLayout = (props: any) => {
  return (
    <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
      <MenuContainer>
        <NavSideBarItem onClick={props.logout}>Sign out</NavSideBarItem>
        {/* main navigation container */}
        <Grid container direction="column" justify="center">
          {navLinks.map(navLink => (
            <NavSideBarItem key={navLink.label} to={navLink.to} data-testid={navLink.label}>
              {navLink.label}
            </NavSideBarItem>
          ))}
        </Grid>
        <Version variant="caption">V1</Version>
      </MenuContainer>
    </Grid>
  );
};
