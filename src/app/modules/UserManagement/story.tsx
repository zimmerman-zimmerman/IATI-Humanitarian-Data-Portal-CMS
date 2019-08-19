import React from 'react';
import { storiesOf } from '@storybook/react';

import Providers from 'app/Providers';
import { UserManLayout } from './layout';

storiesOf('modules | User management ', module).add('layout', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <UserManLayout
        allUsers={[]}
        addUser={() => console.log('addUser')}
        deleteUser={() => console.log('delete user')}
        editUserAction={() => console.log('edit user')}
      />
    </Providers>
  </div>
));
