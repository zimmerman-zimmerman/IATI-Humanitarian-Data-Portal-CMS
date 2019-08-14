import React from 'react';
import { storiesOf } from '@storybook/react';

import { ContainedButton } from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons', module).add('Contained - Enabled', () => (
  <>
    <Providers>
      <ContainedButton text="Button" />
    </Providers>
  </>
));

storiesOf('Inputs|Buttons', module).add('Contained - Disabled', () => (
  <>
    <Providers>
      <ContainedButton text="Button" disabled />
    </Providers>
  </>
));
