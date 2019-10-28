import React, { useState } from 'react';
import Page from 'app/modules/common/Page';
import {
  SectionItem,
  StyledBox,
  StyledGrid,
  StyledGridItem,
} from 'app/components/actionPage';
import { CardGrid } from 'app/components/InputsCard';
import { SignatoryProgressModel } from './model';

import { Divider } from 'app/components/general/divider/divider';

import { SingleLineTextField } from '../../components/inputs/textfields/SingleLineTextField';
import { ContainedButton } from '../../components/inputs/buttons/ContainedButton';
import {
  loadSignatoryProgress,
  deleteSignatoryProgress,
} from 'app/scripts/loadSignatoryProgress';

import { Typography } from '@material-ui/core';

export const SignatoryProgressLayout = (props: SignatoryProgressModel) => {
  return (
    <>
      <Page title="Signatory Progress">
        {/*process.env.NODE_ENV === 'development' && (
          <>
            <button onClick={loadSignatoryProgress}>load default</button>
            <button onClick={deleteSignatoryProgress}>
              delete signatoryProgress
            </button>
          </>
        )*/}
        <StyledBox>
          <StyledGrid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            alignContent="flex-start"
            spacing={0}
          >
            <StyledGridItem item xs={4}>
              <CardGrid>
                <Typography variant="subtitle1" color="primary">
                  Total Signatories
                </Typography>
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="June 2017"
                  value={props.totalSigJune2017}
                  id="text-org-june-input"
                  setValue={props.setTotalSigJune2017}
                  //setValue={()=>null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="1st May, 2018"
                  value={props.totalSigMay2018}
                  id="text-org-may-2018-input"
                  setValue={props.setTotalSigMay2018}
                  //setValue={()=>null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="May, 2019"
                  value={props.totalSigMay2019}
                  id="text-org-may-2019-input"
                  setValue={props.setTotalSigMay2019}
                  //setValue={()=>null}
                />
              </CardGrid>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <CardGrid>
                <Typography variant="subtitle1" color="primary">
                  Publishing open data using IATI
                </Typography>
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="June 2017"
                  value={props.publishingOpenDataIATIJune2017}
                  id="text-org-june-input"
                  setValue={props.setPublishingOpenDataIATIJune2017}
                  //setValue={()=>null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="1st May, 2018"
                  value={props.publishingOpenDataIATIMay2018}
                  id="text-org-may-2018-input"
                  setValue={props.setPublishingOpenDataIATIMay2018}
                  //setValue={()=>null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="May, 2019"
                  value={props.publishingOpenDataIATIMay2019}
                  id="text-org-may-2019-input"
                  setValue={props.setPublishingOpenDataIATIMay2019}
                  //setValue={()=>null}
                />
              </CardGrid>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <CardGrid>
                <Typography variant="subtitle1" color="primary">
                  Publishing data on their humanitarian activities
                </Typography>
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="June 2017"
                  value={props.publishingHumanitarianActivitiesJune2017}
                  id="text-org-june-input"
                  setValue={props.setPublishingHumanitarianActivitiesJune2017}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="1st May, 2018"
                  value={props.publishingHumanitarianActivitiesMay2018}
                  id="text-org-may-2018-input"
                  setValue={props.setPublishingHumanitarianActivitiesMay2018}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="May, 2019"
                  value={props.publishingHumanitarianActivitiesMay2019}
                  id="text-org-may-2019-input"
                  setValue={props.setPublishingHumanitarianActivitiesMay2019}
                  //setValue={() => null}
                />
              </CardGrid>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <CardGrid>
                <Typography variant="subtitle1" color="primary">
                  using v2.02 of the IATI standard or later
                </Typography>
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="June 2017"
                  value={props.using202OrLaterJune2017}
                  id="text-org-june-input"
                  setValue={props.setUsing202OrLaterJune2017}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="1st May, 2018"
                  value={props.using202OrLaterMay2018}
                  id="text-org-may-2018-input"
                  setValue={props.setUsing202OrLaterMay2018}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="May, 2019"
                  value={props.using202OrLaterMay2019}
                  id="text-org-may-2019-input"
                  setValue={props.setUsing202OrLaterMay2019}
                  //setValue={() => null}
                />
              </CardGrid>
            </StyledGridItem>

            <StyledGridItem item xs={4}>
              <CardGrid>
                <Typography variant="subtitle1" color="primary">
                  providing more granular v2.02 data
                </Typography>
                <br />

                <SingleLineTextField
                  fullWidth={false}
                  label="June 2017"
                  value={props.providingGranular202DataJune2017}
                  id="text-org-june-input"
                  setValue={props.setProvidingGranular202DataJune2017}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="1st May, 2018"
                  value={props.providingGranular202DataMay2018}
                  id="text-org-may-2018-input"
                  setValue={props.setProvidingGranular202DataMay2018}
                  //setValue={() => null}
                />
                <br />
                <br />
                <SingleLineTextField
                  fullWidth={false}
                  label="May, 2019"
                  value={props.providingGranular202DataMay2019}
                  id="text-org-may-2019-input"
                  setValue={props.setProvidingGranular202DataMay2019}
                  //setValue={() => null}
                />
              </CardGrid>
            </StyledGridItem>
          </StyledGrid>

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
        </StyledBox>
      </Page>
    </>
  );
};
