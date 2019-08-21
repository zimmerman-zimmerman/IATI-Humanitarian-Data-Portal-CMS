import React from 'react';
import Page from 'app/modules/common/Page';
import styled from 'styled-components';
import { FaqModel } from './model';

/* utils */
import isEqual from 'lodash/isEqual';

/* components */
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Divider } from 'app/components/general/divider/divider';
import { FaqItem } from './common/FaqItem';

/* styles */
import color from 'app/theme/color';
import { boxShadow } from 'app/theme';

const StyledBox = styled(Box)`
  && {
    height: calc(100% - 40px);
    padding-left: 40px;
    padding-top: 40px;
  }
`;

const StyledGrid = styled(Grid)`
  && {
    height: calc(100% - 110px);
    overflow-y: auto;
  }
`;

const StyledGridItem = styled(Grid)`
  && {
    background-color: ${color.whiteOrFontlightbase};
    margin: 16px 0;
    box-shadow: ${boxShadow};
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const SectionItem = styled.div`
  padding: 16px 0;
`;

const StyledPlus = styled.span`
  margin-left: 50px;
`;

const AddFaqText = () => {
  return (
    <div>
      <span>Add FAQ</span>
      <StyledPlus>+</StyledPlus>
    </div>
  );
};

export const FaqLayout = (props: FaqModel) => {
  const noChanges = isEqual(props.faqItems, props.orgFaqItems);

  return (
    <Page title="FAQ">
      <StyledBox>
        <StyledGrid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          {props.faqItems.map((item, index) => (
            <StyledGridItem item xs={12}>
              {
                <FaqItem
                  editItem={props.editItem}
                  defOpen={index === props.faqItems.length - 1}
                  removeItem={props.removeItem}
                  {...item}
                  index={index}
                />
              }
            </StyledGridItem>
          ))}
        </StyledGrid>
        <SectionItem>
          <Divider width="90%" />
        </SectionItem>
        <SectionItem>
          <ContainedButton
            specWidth="241px"
            margin="0 32px 0 0"
            text="Save Change"
            disabled={noChanges}
            onClick={() => props.saveChanges()}
          />
          <ContainedButton
            disabled={noChanges}
            text="Discard Change"
            onClick={() => props.discardChanges()}
          />
          <ContainedButton
            margin="0 0 0 32px"
            text={<AddFaqText />}
            onClick={() => props.addItem()}
          />
        </SectionItem>
      </StyledBox>
    </Page>
  );
};
