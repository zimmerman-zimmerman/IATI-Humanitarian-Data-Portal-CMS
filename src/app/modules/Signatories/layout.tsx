import React from 'react';
import Page from 'app/modules/common/Page';
import { PageContent } from 'app/modules/common/PageContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Table } from 'app/components/datadisplay/Table';
import { mockData } from 'app/components/datadisplay/Table/story';
import AddIcon from '@material-ui/icons/Add';

export const SignatoriesLayout = () => {
  return (
    <Page title="Signatories">
      <PageContent>
        <ContainedButton
          icon={<AddIcon />}
          margin="0 0 4rem 0"
          text="Add Signatory"
          onClick={() => console.log('click')}
        />
        <Table {...mockData} />
      </PageContent>
    </Page>
  );
};
