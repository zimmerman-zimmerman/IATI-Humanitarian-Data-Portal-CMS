/* core */
import React from 'react';
import styled from 'styled-components';
import Page from 'app/modules/common/Page';
import { SignatoriesLayoutModel } from 'app/modules/Signatories/model';

/* components */
import AddIcon from '@material-ui/icons/Add';
import { Table } from 'app/components/datadisplay/Table';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import {
  loadSignatoryProgress,
  deleteSignatoryProgress,
} from 'app/scripts/loadSignatoryProgressUpdate';

const TableWrapper = styled.div`
  tr:hover {
    cursor: pointer;
    background: #a1ae979797 !important;
    td {
      background: transparent !important;
    }
  }
`;

export const SignatoryProgressListLayout = (props: SignatoriesLayoutModel) => {
  return (
    <Page title="Signatories">
      {/*process.env.NODE_ENV === 'development' && (
        <>
          <button onClick={loadSignatoryProgress}>load default</button>
          <button onClick={deleteSignatoryProgress}>delete cctri</button>
        </>
      )*/}
      <ContainedButton
        icon={<AddIcon />}
        margin="0 0 1rem 0"
        text="Add Signatory Progress"
        onClick={props.handleAddNewSignatory}
      />
      <TableWrapper>
        <Table {...props.tableData} />
      </TableWrapper>
    </Page>
  );
};
