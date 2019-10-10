/* core */
import React from 'react';
import Page from 'app/modules/common/Page';
import { TooltipsLayoutModel } from 'app/modules/Tooltips/model';

/* components */
import { UploadDialog } from 'app/modules/Tooltips/common/UploadDialog';
import { Table } from 'app/components/datadisplay/Table';
import styled from 'styled-components';

const BasePage = styled.div`
  padding-top: 10vh;
`;

export const TooltipsLayout = (props: TooltipsLayoutModel) => {
  return (
    <Page title="Tooltips">
      <BasePage>
        <UploadDialog actions={props.actions} />
        <Table {...props.tableData} />
      </BasePage>
    </Page>
  );
};
