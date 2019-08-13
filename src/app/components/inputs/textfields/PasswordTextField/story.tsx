import React from 'react';
import { storiesOf } from '@storybook/react';

import Comp from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|TextFields', module).add('Login Password', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <Comp label="Password" id="login-password" />
    </Providers>
  </div>
));
