/* core */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* store */
import { signatoryStore } from './store';

/* utils */
import { formatTable, tableBase } from './util';

/* components */
import { SignatoriesLayout } from 'app/modules/Signatories/layout';

function SignatoriesPage(props) {
  const [state, actions] = signatoryStore();

  useEffect(() => {
    actions.getAllSign();
  }, []);

  tableBase.data = formatTable(state.allSignatories);

  return (
    <SignatoriesLayout
      tableData={tableBase}
      handleAddNewSignatory={() => props.history.push('/add-signatory')}
    />
  );
}

export const Signatories = withRouter(SignatoriesPage);
