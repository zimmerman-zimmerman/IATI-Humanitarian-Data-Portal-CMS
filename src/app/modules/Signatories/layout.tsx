/* core */
import React from 'react';
import Page from 'app/modules/common/Page';
import { PageContent } from 'app/modules/common/PageContent';
import { SignatoriesLayoutModel } from 'app/modules/Signatories/model';

/* components */
import AddIcon from '@material-ui/icons/Add';
import { Table } from 'app/components/datadisplay/Table';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';

export const SignatoriesLayout = (props: SignatoriesLayoutModel) => {
  return (
    <Page title="Signatories">
      <PageContent>
        <ContainedButton
          icon={<AddIcon />}
          margin="0 0 4rem 0"
          text="Add Signatory"
          onClick={props.handleAddNewSignatory}
        />
        <Table {...props.tableData} />
      </PageContent>
    </Page>
  );
};
