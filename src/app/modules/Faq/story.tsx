import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaqLayout } from './layout';

import Providers from 'app/Providers';

storiesOf('modules | Faq ', module).add('layout', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <FaqLayout
        removeItem={() => console.log('remove')}
        editItem={() => console.log('edit')}
        faqItems={[]}
        orgFaqItems={[]}
        saveChanges={() => console.log('save')}
        discardChanges={() => console.log('discard')}
        addItem={() => console.log('add')}
      />
    </Providers>
  </div>
));
