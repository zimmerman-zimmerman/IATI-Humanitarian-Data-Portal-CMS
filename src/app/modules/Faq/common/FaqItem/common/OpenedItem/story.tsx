import React from 'react';
import { storiesOf } from '@storybook/react';

import { OpenedItem } from '.';
import Providers from 'app/Providers';

storiesOf('Faq Item | components ', module).add('Opened item', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <OpenedItem
        index={0}
        title="sample"
        expl="sample"
        editItem={() => console.log('edit')}
      />
    </Providers>
  </div>
));
