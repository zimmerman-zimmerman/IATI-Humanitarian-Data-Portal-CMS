/* core */
import React from 'react';
import Page from 'app/modules/common/Page';
import { TooltipsLayoutModel } from 'app/modules/Tooltips/model';

/* components */
import { UploadDialog } from 'app/modules/Tooltips/common/UploadDialog';
import { Table } from 'app/components/datadisplay/Table';

export const TooltipsLayout = (props: TooltipsLayoutModel) => {
  return (
    <Page title="Tooltips">
      <UploadDialog actions={props.actions} />
      <Table {...props.tableData} />
    </Page>
  );
};
