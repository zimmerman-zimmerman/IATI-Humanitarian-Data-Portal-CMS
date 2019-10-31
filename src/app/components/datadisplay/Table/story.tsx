import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from '.';
import Providers from 'app/Providers';

/* consts */
import { tableBase } from 'app/modules/Signatories/util';

storiesOf('Data display|Table', module).add('Signatories', () => (
  <>
    <Providers>
      <Table {...tableBase} />
    </Providers>
  </>
));
