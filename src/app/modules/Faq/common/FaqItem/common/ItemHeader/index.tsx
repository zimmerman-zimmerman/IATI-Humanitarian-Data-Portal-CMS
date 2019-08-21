import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { HeaderModel } from './model';

/* icons */
import CloseIcon from '@material-ui/icons/Close';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';

/* style */
import { Typography, Weight, Palette } from 'app/theme';
import color from 'app/theme/color';

const StyledGrid = styled(Grid)`
  padding: 10px;

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

const ArrowStyleDown = styled(ArrowDown)`
  margin-left: auto;
`;

const ArrowStyleUp = styled(ArrowUp)`
  margin-left: auto;
`;

const ArrowContainer = styled.div`
  display: flex;
`;

const Close = styled(CloseIcon)`
  &:hover {
    background-color: ${Palette.action.hover};
  }
`;

export const ItemHeader = (props: HeaderModel) => {
  return (
    <StyledGrid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      onClick={() => props.setOpen()}
    >
      <Grid item xs={1}>
        <Close
          color="error"
          onClick={e => {
            e.stopPropagation();
            props.onRemove();
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <HeaderText>{props.title}</HeaderText>
      </Grid>
      <Grid item xs={1}>
        <ArrowContainer>
          {!props.open ? (
            <ArrowStyleDown fontSize="large" />
          ) : (
            <ArrowStyleUp fontSize="large" />
          )}
        </ArrowContainer>
      </Grid>
    </StyledGrid>
  );
};
