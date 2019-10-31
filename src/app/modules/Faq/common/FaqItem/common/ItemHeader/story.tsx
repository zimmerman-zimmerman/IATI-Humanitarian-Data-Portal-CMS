import React from 'react';
import { storiesOf } from '@storybook/react';

import { ItemHeader } from '.';
import Providers from 'app/Providers';

storiesOf('Faq Item | components ', module).add('Item Header', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <ItemHeader
        open={false}
        title="sample"
        onRemove={() => console.log('remove')}
        setOpen={() => console.log('open')}
      />
    </Providers>
  </div>
));
