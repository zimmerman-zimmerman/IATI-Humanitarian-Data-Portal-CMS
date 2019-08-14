import React from 'react';
import { storiesOf } from '@storybook/react';

import Module from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Sign in', module).add('layout', () => (
  <div style={{ width: "100%", height: "100%" }}>
    <Providers>
      <Module />
    </Providers>
  </div>
));
