/* eslint-disable react-hooks/exhaustive-deps */
/* core */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* store */
import { tooltipStore } from './store';

/* utils */
import { formatTable, tableBase } from './util';

/* components */
import { TooltipsLayout } from 'app/modules/Tooltips/layout';

function TooltipsPage(props) {
  const [state, actions] = tooltipStore();

  useEffect(() => {
    actions.getAllTooltips();
  }, []);

  const data = formatTable(state.allTooltips);
  const tableBaseObj = tableBase({
    editTooltip: actions.editTooltip,
    data: data,
  });

  return <TooltipsLayout tableData={{ ...tableBaseObj, data: data }} />;
}

export const Tooltips = withRouter(TooltipsPage);
