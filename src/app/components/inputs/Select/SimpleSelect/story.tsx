import React from 'react';
import { storiesOf } from '@storybook/react';

import { SimpleSelect } from '.';
import Providers from 'app/Providers';

storiesOf('Select|SimpleSelect', module).add('Select', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <SimpleSelect
        fullWidth
        setValue={() => console.log('value selected')}
        label="sample"
        value="role"
        id="select-role"
        options={[
          {
            value: 'role1',
            label: 'role1',
          },
        ]}
      />
    </Providers>
  </div>
));
