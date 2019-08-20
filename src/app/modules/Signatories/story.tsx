import React from 'react';
import { storiesOf } from '@storybook/react';

import { Signatories } from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Signatories', module).add('layout', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <Signatories />
    </Providers>
  </div>
));
