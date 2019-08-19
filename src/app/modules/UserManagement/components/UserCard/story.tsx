import React from 'react';
import { storiesOf } from '@storybook/react';

import { UserCard } from '.';
import Providers from 'app/Providers';

storiesOf('UserManagement | components ', module).add('User Card', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <UserCard
        name="Username"
        onDelete={() => console.log('DELETE')}
        onEdit={() => console.log('EDIT')}
      />
    </Providers>
  </div>
));
