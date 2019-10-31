import React from 'react';
import { storiesOf } from '@storybook/react';

import { FaqItem } from '.';
import Providers from 'app/Providers';

storiesOf('Faq | components ', module).add('Faq item', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <FaqItem
        removeItem={() => console.log('remove')}
        editItem={() => console.log('edit')}
        index={0}
        title="sample"
        expl="sample"
        defOpen
      />
    </Providers>
  </div>
));
