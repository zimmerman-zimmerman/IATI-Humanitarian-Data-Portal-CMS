import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { NavSideBar } from '.';
import Providers from 'app/Providers';
import color from 'app/theme/color';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.white};
`;

storiesOf('Navigation|Sidebar', module).add('layout', () => (
  <Container>
    <Providers>
      <NavSideBar />
    </Providers>
  </Container>
));
