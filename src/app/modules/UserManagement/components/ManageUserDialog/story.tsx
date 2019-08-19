import React from 'react';
import { storiesOf } from '@storybook/react';

import Providers from 'app/Providers';
import { ManageDialogLayout } from './layout';

storiesOf('UserManagement | components ', module).add(
  'Manage User Dialog',
  () => (
    <div style={{ width: '100%', height: '100%' }}>
      <Providers>
        <ManageDialogLayout
          open
          handleClose={() => console.log('click')}
          title='sample'
          email='sample'
          setEmail={() => console.log('click')}
          username='sample'
          setUsername={() => console.log('click')}
          editUser={null}
          password='sample'
          showPass
          setPassword={() => console.log('click')}
          setShowPass={() => console.log('click')}
          role='sample'
          setRole={() => console.log('click')}
          submitButText='sample'
          submitAction={() => console.log('click')}
        />
      </Providers>
    </div>
  )
);
