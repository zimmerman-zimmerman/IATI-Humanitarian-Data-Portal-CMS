/* core */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* store */
import { signatoriesStore } from './store';

/* utils */
import { formatTable, tableBase } from './util';

/* components */
import { SignatoriesLayout } from 'app/modules/Signatories/layout';

function SignatoriesPage(props) {
  const [state, actions] = signatoriesStore();

  useEffect(() => {
    actions.getAllSign();
  }, []);

  tableBase.data = formatTable(state.allSignatories);

  // so here we keep the id of the signatory item in the first column, so we pass the
  // id like below
  tableBase.options.onRowClick = rowData =>
    props.history.push(`/edit-signatory/${rowData[0]}`);

  return (
    <SignatoriesLayout
      tableData={tableBase}
      handleAddNewSignatory={() => props.history.push('/add-signatory')}
    />
  );
}

export const Signatories = withRouter(SignatoriesPage);
