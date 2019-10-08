/* core */
import React from 'react';
import Page from 'app/modules/common/Page';
import { loadTooltips, deleteTooltips } from 'app/scripts/loadTooltips';
import { TooltipsLayoutModel } from 'app/modules/Tooltips/model';

/* components */
import { Table } from 'app/components/datadisplay/Table';
import styled from 'styled-components';

const BasePage = styled.div`
  padding-top: 10vh;
`;

export const TooltipsLayout = (props: TooltipsLayoutModel) => {
  return (
    <Page title="Tooltips">
      <BasePage>
        {process.env.NODE_ENV === 'development' && (
          <>
            <button onClick={loadTooltips}>load default</button>
            <button onClick={deleteTooltips}>delete all</button>
            <br />
            <br />
          </>
        )}
        <Table {...props.tableData} />
      </BasePage>
    </Page>
  );
};
