import React from 'react';
import Page from 'app/modules/common/Page';
import styled from 'styled-components';
import { FaqModel } from './model';

/* components */
import Grid from '@material-ui/core/Grid';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Divider } from 'app/components/general/divider/divider';
import { FaqItem } from './common/FaqItem';

const StyledGrid = styled(Grid)`
  && {
    padding: 90px 74px;
  }
`;

const StyledGridItem = styled(Grid)`
  && {
    padding: 16px 0;
    &:first-child {
      padding-top: 0;
    }
  }
`;

const ButtonContainer = styled(StyledGridItem)`
  padding: 16px 0;
`;

const StyledPlus = styled.span`
  margin-left: 50px;
`;

const AddFaqText = () => {

  return (
    <div>
    <span>
      Add FAQ
    </span>
      <StyledPlus>
        +
      </StyledPlus>
    </div>
  );
};

export const FaqLayout = (props: FaqModel) => {
  return (
    <Page title="FAQ">
      <StyledGrid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
        <StyledGridItem item xs={12}>
          {<FaqItem />}
        </StyledGridItem>
        <StyledGridItem item xs={12}>
          {<FaqItem />}
        </StyledGridItem>
        <StyledGridItem item xs={11}>
          <Divider />
        </StyledGridItem>
        <ButtonContainer item xs={12}>
          <ContainedButton
            specWidth="241px"
            margin="0 32px 0 0"
            text="Save Change"
            onClick={() => console.log('save changes')}
          />
          <ContainedButton
            text="Discard Change"
            onClick={() => console.log('Discard changes')}
          />
          <ContainedButton
            margin="0 0 0 32px"
            text={<AddFaqText />}
            onClick={() => console.log('add faq')}
          />
        </ButtonContainer>
      </StyledGrid>
    </Page>
  );
};
