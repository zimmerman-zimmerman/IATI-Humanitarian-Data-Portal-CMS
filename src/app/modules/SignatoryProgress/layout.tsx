import React from 'react';
import Page from 'app/modules/common/Page';

/* utils */
import isEqual from 'lodash/isEqual';

/* styles */
import { Palette } from 'app/theme';

/* components */
import { Divider } from 'app/components/general/divider/divider';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import {
  SectionItem,
  StyledBox,
  StyledGrid,
  StyledGridItem,
} from 'app/components/actionPage';
import { InputsCard } from 'app/components/InputsCard';
import { SignatoryProgressModel } from './model';

export const SignatoryProgressLayout = (props: SignatoryProgressModel) => {
  return (
    <Page title="Signatory">
      <StyledBox>
        <StyledGrid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <StyledGridItem item xs={12}>
            <InputsCard {...props.signatoryProgressDetail} />
          </StyledGridItem>
        </StyledGrid>
      </StyledBox>
      <SectionItem>
        <Divider />
      </SectionItem>
      <SectionItem>
        {props.edit ? (
          <div>
            <ContainedButton
              specWidth="241px"
              margin="0 32px 0 0"
              text="Save Change"
              disabled={isEqual(
                props.signatoryProgressItem,
                props.existingSignatoryProgressItem
              )}
              onClick={() => props.updateSignatoryProgress()}
            />
            <ContainedButton
              disabled={isEqual(
                props.signatoryProgressItem,
                props.existingSignatoryProgressItem
              )}
              text="Discard Change"
              onClick={() => props.discardChanges()}
            />
            <ContainedButton
              margin="0 0 0 32px"
              text="Remove Signatory"
              backgroundColor={Palette.error.light}
              onClick={() => props.deleteSignatoryProgress()}
            />
          </div>
        ) : (
          <ContainedButton
            specWidth="241px"
            text="Add"
            disabled={
              props.signatoryProgressItem.Date === '' ||
              new Date(props.signatoryProgressItem.Date) > new Date() ||
              props.signatoryProgressItem.totalSig === '' ||
              props.signatoryProgressItem.publishingOpenDataIATI === '' ||
              isNaN(parseInt(props.signatoryProgressItem.totalSig, 10)) ||
              isNaN(
                parseInt(props.signatoryProgressItem.publishingOpenDataIATI, 10)
              )
            }
            onClick={() => {
              props.addSignatoryProgress();
            }}
          />
        )}
      </SectionItem>
    </Page>
  );
};
