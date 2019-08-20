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
        <Grid item md={12}>
          <Box padding="4rem 2rem" paddingLeft="200px" height="100%">
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
