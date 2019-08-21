/* core */
import React, { ReactNode } from 'react';
import useTitle from 'react-use/lib/useTitle';
import { Container, Grid, Box } from '@material-ui/core';
import styled from 'styled-components';

export type PageProps = {
  title?: string;
  children?: ReactNode;
};

const GridItem = styled(Grid)`
  height: 100%;
`;
const MainGrid = styled(Grid)`
  height: 100%;
`;
const MainContainer = styled(Container)`
  height: 100%;
`;

const Page = (props: PageProps) => {
  useTitle(`MLT CMS - ${props.title}`);

  return (
    <MainContainer maxWidth="lg">
      <MainGrid container>
        <GridItem item md={12}>
          <Box paddingLeft="200px" height="100%">
            {props.children}
          </Box>
        </GridItem>
      </MainGrid>
    </MainContainer>
  );
};

export default Page;
