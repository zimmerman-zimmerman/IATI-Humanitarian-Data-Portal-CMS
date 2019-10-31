import React from 'react';
import Page from 'app/modules/common/Page';

/* components */
import { Divider } from 'app/components/general/divider/divider';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { CardGrid } from 'app/components/InputsCard';
import {
  SectionItem,
  StyledBox,
  StyledGrid,
  StyledGridItem,
} from 'app/components/actionPage';
import { CCTRIModel } from './model';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { loadCCTRI, deleteCCTRI } from 'app/scripts/loadCCTRI';

export const CCTRILayout = (props: CCTRIModel) => {
  return (
    <Page title="CCTRI">
      {/* {process.env.NODE_ENV === 'development' && (
        <>
          <button onClick={loadCCTRI}>load default</button>
          <button onClick={deleteCCTRI}>delete cctri</button>
        </>
      )} */}
      <StyledBox>
        <StyledGrid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <StyledGridItem item xs={12}>
            <CardGrid>
              <SingleMultiLineTextField
                fullWidth
                label="Title"
                value={props.titleValue}
                id="text-cctri-title-input"
                setValue={props.setTitleValue}
              />
              <br />
              <br />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth
                multiline
                label="Summary"
                variant="filled"
                value={props.summaryValue}
                id="text-cctri-summary-input"
                setValue={props.setSummaryValue}
              />
              <br />
              <br />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth
                multiline
                label="Body"
                variant="filled"
                value={props.bodyValue}
                id="text-cctri-body-input"
                setValue={props.setBodyValue}
              />
            </CardGrid>
          </StyledGridItem>
        </StyledGrid>
      </StyledBox>
      <SectionItem>
        <Divider />
      </SectionItem>
      <SectionItem>
        <ContainedButton
          specWidth="241px"
          margin="0 32px 0 0"
          text="Save Change"
          disabled={!props.areChanges}
          onClick={props.saveChanges}
        />
        <ContainedButton
          text="Discard Change"
          disabled={!props.areChanges}
          onClick={props.discardChanges}
        />
      </SectionItem>
    </Page>
  );
};
