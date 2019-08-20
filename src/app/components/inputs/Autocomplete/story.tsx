import React from 'react';
import { storiesOf } from '@storybook/react';

import { Autocomplete } from '.';
import Providers from 'app/Providers';

storiesOf('Select|Autocomplete', module).add('Autocomplete', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <Autocomplete />
    </Providers>
  </div>
));
