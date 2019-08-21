import React from 'react';
import Page from 'app/modules/common/Page';

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
import { SignatoryModel } from './model';

export const SignatoryLayout = (props: SignatoryModel) => {
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
            <InputsCard {...props.signatory} />
          </StyledGridItem>
          <StyledGridItem item xs={12}>
            <InputsCard {...props.financial} />
          </StyledGridItem>
          <StyledGridItem item xs={12}>
            <InputsCard {...props.descriptive} />
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
            // disabled={noChanges}
            onClick={() => console.log('save')}
          />
          <ContainedButton
            // disabled={noChanges}
            text="Discard Change"
            onClick={() => console.log('discard')}
          />
          <ContainedButton
            margin="0 0 0 32px"
            text="Remove Signatory"
            backgroundColor={Palette.error.light}
            onClick={() => console.log('remove')}
          />
        </SectionItem>
      </StyledBox>
    </Page>
  );
};
