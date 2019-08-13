import React from 'react';
import { storiesOf } from '@storybook/react';

import Comp from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|TextFields', module).add('Login Username', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <Comp label="Username" id="login-username" />
    </Providers>
  </div>
));
