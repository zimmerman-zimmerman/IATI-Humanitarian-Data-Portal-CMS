/* core */
import React from 'react';
import { Box } from '@material-ui/core';

export const PageContent = props => {
  return <Box padding="4rem 2rem">{props.children}</Box>;
};
