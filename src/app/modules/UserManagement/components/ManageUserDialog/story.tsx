import React from 'react';
import { storiesOf } from '@storybook/react';

import { ManageUserDialog } from '.';
import Providers from 'app/Providers';

storiesOf('UserManagement | components ', module).add(
  'Manage User Dialog',
  () => (
    <div style={{ width: '100%', height: '100%' }}>
      <Providers>
        <ManageUserDialog
          open={true}
          handleClose={() => console.log('Close')}
          addUser={() => console.log('Add')}
        />
      </Providers>
    </div>
  )
);
