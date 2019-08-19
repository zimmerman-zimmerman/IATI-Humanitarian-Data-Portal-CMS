/* base */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* components */
import Typography from '@material-ui/core/Typography';
import theme from 'app/theme';

const LinkContainer = styled(Link)`
  && {
    display: flex;
    margin-bottom: 30px;
    color: ${theme.palette.text.primary};
    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
`;

export const NavSideBarItem = props => {
  return (
    <LinkContainer to="#">
      <Typography variant="button">{props.children}</Typography>
    </LinkContainer>
  );
};
