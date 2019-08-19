/* base */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* components */
import Typography from '@material-ui/core/Typography';
import theme from 'app/theme';

export const NavSideBarItem = styled(props => (
  <Link {...props} to="#">
    <Typography variant="button">{props.children}</Typography>
  </Link>
))`
  && {
    display: flex;
    margin-bottom: 30px;
    color: ${theme.palette.text.primary};
    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
`;
