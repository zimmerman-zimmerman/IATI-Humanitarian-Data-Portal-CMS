import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from 'app/modules/common/Page';
import { NavSideBar } from 'app/components/navigation/NavSideBar';
import { PageContent } from 'app/modules/common/PageContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Table } from 'app/components/datadisplay/Table';
import { mockData } from 'app/components/datadisplay/Table/story';
import AddIcon from '@material-ui/icons/Add';

export const SignatoriesLayout = () => {
  return (
    <Page title="Signatories">
      <Grid container direction="row" justify="flex-start">
        <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
          <NavSideBar />
        </Grid>
        <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
          <PageContent>
            <ContainedButton
              icon={<AddIcon />}
              margin="0 0 4rem 0"
              text="Add Signatory"
              onClick={() => console.log('click')}
            />
            <Table {...mockData} />
          </PageContent>
        </Grid>
      </Grid>
    </Page>
  );
};
