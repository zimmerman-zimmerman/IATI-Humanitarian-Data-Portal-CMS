/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import Typography from '@material-ui/core/Typography';
import { NavSideBarItem } from 'app/components/navigation/NavSideBar/common/NavSideBarItem';
import color from 'app/theme/color';

const Container = styled.div`
  width: 205px;
  height: calc(100% - 48px);
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 0 24px 24px;
  background-color: ${color.whiteOrFontlightbase};
`;

const MenuContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Version = styled(Typography)`
  && {
    color: ${color.greydark20OrFontsecondary};
  }
`;

export const NavSideBarLayout = () => {
  return (
    <Container>
      <NavSideBarItem>Sign out</NavSideBarItem>
      <MenuContainer>
        <NavSideBarItem>Signatories</NavSideBarItem>
        <NavSideBarItem>Settings</NavSideBarItem>
        <NavSideBarItem>FAQ Text</NavSideBarItem>
        <NavSideBarItem>CCTRIs Text</NavSideBarItem>
        <NavSideBarItem>Tooltips Text</NavSideBarItem>
      </MenuContainer>
      <Version variant="caption">V1</Version>
    </Container>
  );
};
