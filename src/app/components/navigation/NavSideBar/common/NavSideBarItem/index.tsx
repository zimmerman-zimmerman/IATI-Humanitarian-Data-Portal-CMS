/* base */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/* components */
import Typography from '@material-ui/core/Typography';
import theme from 'app/theme';

export const NavSideBarItem = styled(props =>
  props.to ? (
    <NavLink
      exact
      activeStyle={{ color: theme.palette.primary.light }}
      {...props}
    >
      <Typography variant="button">{props.children}</Typography>
    </NavLink>
  ) : (
    <Typography variant="button" {...props}>
      {props.children}
    </Typography>
  )
)`
  && {
    display: flex;
    margin-bottom: 30px;
    color: ${theme.palette.text.primary};
    &:hover {
      cursor: pointer;
      color: ${theme.palette.primary.main};
    }
  }
`;
