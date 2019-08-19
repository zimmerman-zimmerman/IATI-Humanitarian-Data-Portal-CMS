/* core */
import React from 'react';

/* components */
import TableLayout from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export const Table = (props: TableModuleModel) => {
  return <TableLayout {...props} />;
};
