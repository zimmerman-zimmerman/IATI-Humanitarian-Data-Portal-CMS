/* core */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* store */
import { signatoryProgressListStore } from './store';

/* utils */
import { formatTable, tableBase } from './util';

/* components */
import { SignatoryProgressListLayout } from 'app/modules/SignatoryProgressList/layout';

function SignatoryProgressListPage(props) {
  const [state, actions] = signatoryProgressListStore();

  useEffect(() => {
    actions.getAllSigProgress();
  }, []);

  tableBase.data = formatTable(state.allSignatoryProgress);

  // so here we keep the id of the signatory item in the first column, so we pass the
  // id like below
  tableBase.options.onRowClick = rowData =>
    props.history.push(`/edit-signatoryProgress/${rowData[0]}`);

  return (
    <SignatoryProgressListLayout
      tableData={tableBase}
      handleAddNewSignatory={() => props.history.push('/add-signatoryProgress')}
    />
  );
}

export const SignatoryProgressList = withRouter(SignatoryProgressListPage);
