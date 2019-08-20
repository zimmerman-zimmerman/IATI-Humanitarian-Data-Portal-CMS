/* core */
import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useTitle from 'react-use/lib/useTitle';

export type PageProps = {
  title?: string;
  children?: ReactNode;
};

const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
`;

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const Page = (props: PageProps) => {
  useTitle(`MLT CMS - ${props.title}`);

  return (
    <ThemeProvider theme={theme}>
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
};

export default Page;
