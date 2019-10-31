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
import { AboutLayoutModel } from './model';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import {
  loadAboutTextBlocks,
  deleteAboutTextBlocks,
} from 'app/scripts/loadAboutTextBlocks';

export const AboutLayout = (props: AboutLayoutModel) => {
  return (
    <Page title="About Text">
      {/* {process.env.NODE_ENV === 'development' && (
        <>
          <button onClick={loadAboutTextBlocks}>load default</button>
          <button onClick={deleteAboutTextBlocks}>delete all</button>
        </>
      )} */}
      <StyledBox>
        {props.textBlocks.map(block => (
          <>
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
                    value={block.title}
                    id={`about-text-block-title-input${block._id}`}
                    setValue={value =>
                      props.setTextBlockFields(
                        block._id,
                        value,
                        block.body,
                        block.moreLink
                      )
                    }
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
                    value={block.body}
                    id={`about-text-block-body-input${block._id}`}
                    setValue={value =>
                      props.setTextBlockFields(
                        block._id,
                        block.title,
                        value,
                        block.moreLink
                      )
                    }
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <SingleMultiLineTextField
                    fullWidth
                    label="More link (optional)"
                    value={block.moreLink}
                    id={`about-text-block-link-input${block._id}`}
                    setValue={value =>
                      props.setTextBlockFields(
                        block._id,
                        block.title,
                        block.body,
                        value
                      )
                    }
                  />
                </CardGrid>
              </StyledGridItem>
            </StyledGrid>
            <br />
            <br />
            <br />
          </>
        ))}
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
