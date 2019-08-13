import React from 'react';
import { storiesOf } from '@storybook/react';

import Comp from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons', module).add('Contained - Enabled', () => (
  <>
    <Providers>
      <Comp text="Button" />
    </Providers>
  </>
));

storiesOf('Inputs|Buttons', module).add('Contained - Disabled', () => (
  <>
    <Providers>
      <Comp text="Button" disabled />
    </Providers>
  </>
));
