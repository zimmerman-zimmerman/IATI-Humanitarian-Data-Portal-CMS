import React from 'react';
import { storiesOf } from '@storybook/react';

import Providers from 'app/Providers';
import { UserManLayout } from './layout';

storiesOf('modules | User management ', module).add('layout', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <UserManLayout
        open={false}
        editUser={null}
        handleOpen={() => console.log('click')}
        handleClose={() => console.log('click')}
        allUsers={[]}
        handleAddUser={() => console.log('click')}
        deleteUser={() => console.log('click')}
        handleEditUser={() => console.log('click')}
        handleUserUpdated={() => console.log('click')}
      />
    </Providers>
  </div>
));
