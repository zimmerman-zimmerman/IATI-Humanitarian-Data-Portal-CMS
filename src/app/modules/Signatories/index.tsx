/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';

/* components */
import { SignatoriesLayout } from 'app/modules/Signatories/layout';

/* mock */
import { mockData } from 'app/components/datadisplay/Table/story';

function SignatoriesPage() {
  return (
    <SignatoriesLayout
      tableData={mockData}
      handleAddNewSignatory={() => console.log('add new signa')}
    />
  );
}

export const Signatories = withRouter(SignatoriesPage);
