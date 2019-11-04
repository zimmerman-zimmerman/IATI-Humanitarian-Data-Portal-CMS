/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Page from 'app/modules/common/Page';
import {
  SectionItem,
  StyledBox,
  StyledGrid,
  StyledGridItem,
} from 'app/components/actionPage';
import { CardGrid } from 'app/components/InputsCard';
import DateField from '../../components/inputs/DateInputField';
import { SignatoryProgressModel } from './model';

import { Divider } from 'app/components/general/divider/divider';

import { SingleMultiLineTextField } from '../../components/inputs/textfields/SingleMultiLineTextField';
import { ContainedButton } from '../../components/inputs/buttons/ContainedButton';
import {
  loadSignatoryProgress,
  deleteSignatoryProgress,
} from 'app/scripts/loadSignatoryProgress';

import { Typography } from '@material-ui/core';

export const SignatoryProgressLayout = (props: SignatoryProgressModel) => {
  return (
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
        >
          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                Dates
              </Typography>
              <br />
              <DateField
                // defaultValue="2001-01-01"
                value={props.firstDate}
                label="First Date"
                onChange={props.setFirstDate}
                disabled={false}
                fullWidth={false}
              />

              <br />
              <DateField
                // defaultValue="2001-01-01"
                value={props.secondDate}
                label="Second Date"
                onChange={props.setSecondDate}
                disabled={false}
                fullWidth={false}
              />

              <br />
              <DateField
                // defaultValue="2001-01-01"
                value={props.thirdDate}
                label="Third Date"
                onChange={props.setThirdDate}
                disabled={false}
                fullWidth={false}
              />
            </CardGrid>
          </StyledGridItem>
          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                Total Signatories
              </Typography>
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="June 2017"
                value={props.totalSigFirstDate}
                id="text-org-june-input"
                setValue={props.setTotalSigFirstDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="1st May, 2018"
                value={props.totalSigSecondDate}
                id="text-org-may-2018-input"
                setValue={props.setTotalSigSecondDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="May, 2019"
                value={props.totalSigThirdDate}
                id="text-org-may-2019-input"
                setValue={props.setTotalSigThirdDate}
              />
            </CardGrid>
          </StyledGridItem>

          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                Publishing open data using IATI
              </Typography>
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="June 2017"
                value={props.publishingOpenDataIATIFirstDate}
                id="text-org-june-input"
                setValue={props.setPublishingOpenDataIATIFirstDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="1st May, 2018"
                value={props.publishingOpenDataIATISecondDate}
                id="text-org-may-2018-input"
                setValue={props.setPublishingOpenDataIATISecondDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="May, 2019"
                value={props.publishingOpenDataIATIThirdDate}
                id="text-org-may-2019-input"
                setValue={props.setPublishingOpenDataIATIThirdDate}
              />
            </CardGrid>
          </StyledGridItem>

          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                Publishing data on their humanitarian activities
              </Typography>
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="June 2017"
                value={props.publishingHumanitarianActivitiesFirstDate}
                id="text-org-june-input"
                setValue={props.setPublishingHumanitarianActivitiesFirstDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="1st May, 2018"
                value={props.publishingHumanitarianActivitiesSecondDate}
                id="text-org-may-2018-input"
                setValue={props.setPublishingHumanitarianActivitiesSecondDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="May, 2019"
                value={props.publishingHumanitarianActivitiesThirdDate}
                id="text-org-may-2019-input"
                setValue={props.setPublishingHumanitarianActivitiesThirdDate}
              />
            </CardGrid>
          </StyledGridItem>

          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                using v2.02 of the IATI standard or later
              </Typography>
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="June 2017"
                value={props.using202OrLaterFirstDate}
                id="text-org-june-input"
                setValue={props.setUsing202OrLaterFirstDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="1st May, 2018"
                value={props.using202OrLaterSecondDate}
                id="text-org-may-2018-input"
                setValue={props.setUsing202OrLaterSecondDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="May, 2019"
                value={props.using202OrLaterThirdDate}
                id="text-org-may-2019-input"
                setValue={props.setUsing202OrLaterThirdDate}
              />
            </CardGrid>
          </StyledGridItem>

          <StyledGridItem item md={4}>
            <CardGrid>
              <Typography variant="subtitle1" color="primary">
                providing more granular v2.02 data
              </Typography>
              <br />

              <SingleMultiLineTextField
                fullWidth={false}
                label="June 2017"
                value={props.providingGranular202DataFirstDate}
                id="text-org-june-input"
                setValue={props.setProvidingGranular202DataFirstDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="1st May, 2018"
                value={props.providingGranular202DataSecondDate}
                id="text-org-may-2018-input"
                setValue={props.setProvidingGranular202DataSecondDate}
              />
              <br />
              <br />
              <SingleMultiLineTextField
                fullWidth={false}
                label="May, 2019"
                value={props.providingGranular202DataThirdDate}
                id="text-org-may-2019-input"
                setValue={props.setProvidingGranular202DataThirdDate}
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
