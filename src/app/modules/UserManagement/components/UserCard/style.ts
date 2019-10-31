import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const StyledContent = styled(CardContent)`
  && {
    display: flex;
  }
`;

export const StyledButtonGrid = styled(Grid)`
  && {
    display: flex;
  }
`;

export const StyledName = styled(Typography)`
  && {
    height: fit-content;
    margin: 0 auto 0 20px;
    font-weight: bold;
    font-size: 30px;
  }
`;
