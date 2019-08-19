import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

/* icons */
import CloseIcon from '@material-ui/icons/Close';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';

/* style */
import { Typography, Weight, boxShadow, Palette } from 'app/theme';
import color from 'app/theme/color';

const StyledGrid = styled(Grid)`
  background-color: ${color.whiteOrFontlightbase};
  padding: 10px 0 10px 10px;
  box-shadow: ${boxShadow};
  
  &:hover {
    cursor: pointer;
  }
  
`;

const HeaderText = styled.div`
  font-family: ${Typography.fontFamily};
  font-size: 16px;
  font-weight: ${Weight.medium};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${color.black};
`;

const Arrow = styled(ArrowDown)`
  margin-left: 10px;
`;

const Close = styled(CloseIcon)`
  &:hover {
    background-color: ${Palette.action.hover};
  }
`;

export const ItemHeader = () => {
  return (
    <StyledGrid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={1}>
        <Close color="error" />
      </Grid>
      <Grid item xs={10}>
        <HeaderText>
          hello
        </HeaderText>
      </Grid>
      <Grid item xs={1} >
        <Arrow fontSize="large" />
      </Grid>
    </StyledGrid>
  );
};
