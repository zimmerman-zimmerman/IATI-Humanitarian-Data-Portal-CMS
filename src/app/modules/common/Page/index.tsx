/* core */
import React, { ReactNode } from 'react';

import useTitle from 'react-use/lib/useTitle';

import { Container, Grid, Box } from '@material-ui/core';

export type PageProps = {
  title?: string;
  children?: ReactNode;
};

const Page = (props: PageProps) => {
  useTitle(`MLT CMS - ${props.title}`);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={9} sm={10} md={12} lg={12} xl={12}>
          <Box paddingLeft="200px">{props.children}</Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
