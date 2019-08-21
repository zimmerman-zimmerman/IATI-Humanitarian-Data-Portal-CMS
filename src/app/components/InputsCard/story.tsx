import React from 'react';
import { storiesOf } from '@storybook/react';

import { InputsCard } from '.';
import Providers from 'app/Providers';

/* mock */
import { mockCardData } from './mock';

storiesOf('components|Inputs Card', module).add('layout', () => (
  <>
    <Providers>
      <InputsCard {...mockCardData} />
    </Providers>
  </>
));
