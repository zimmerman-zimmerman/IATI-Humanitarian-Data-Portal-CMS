/* eslint-disable react-hooks/exhaustive-deps */
/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';

/* store */
import { tooltipStore } from './store';

/* utils */
import { formatTable, tableBase } from './util';

/* components */
import { TooltipsLayout } from 'app/modules/Tooltips/layout';

function TooltipsPage(props) {
  const [state, actions] = tooltipStore();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    actions.getAllTooltips();
  }, []);

  React.useEffect(() => {
    setData(formatTable(state.allTooltips) as never);
  }, [state.allTooltips]);

  const tableBaseObj = tableBase({
    editTooltip: actions.editTooltip,
    data: data,
  });

  return (
    <TooltipsLayout
      actions={actions}
      tableData={{ ...tableBaseObj, data: data }}
    />
  );
}

export const Tooltips = withRouter(TooltipsPage);
