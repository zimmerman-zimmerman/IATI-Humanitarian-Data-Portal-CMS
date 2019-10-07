/* base */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* components */
import Typography from '@material-ui/core/Typography';
import theme from 'app/theme';

export const NavSideBarItem = styled(props =>
  props.to ? (
    <Link {...props}>
      <Typography variant="button">{props.children}</Typography>
    </Link>
  ) : (
    <a {...props}>
      <Typography variant="button">{props.children}</Typography>
    </a>
  )
)`
  && {
    display: flex;
    margin-bottom: 30px;
    color: ${theme.palette.text.primary};
    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
`;
