import React from 'react';
import Page from 'app/modules/common/Page';

/* styles */
import beautify from 'js-beautify';

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
import { SingleLineTextField } from 'app/components/inputs/textfields/SingleLineTextField';
import { MultiLineTextField } from 'app/components/inputs/textfields/MultiLineTextField';
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
              <SingleLineTextField
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
              <MultiLineTextField
                fullWidth
                multiline
                rows="5"
                label="Summary"
                margin="normal"
                variant="filled"
                value={beautify.html(props.summaryValue, {
                  indent_size: '4',
                  indent_char: ' ',
                  max_preserve_newlines: '5',
                  preserve_newlines: true,
                  keep_array_indentation: false,
                  break_chained_methods: false,
                  indent_scripts: 'normal',
                  brace_style: 'expand',
                  space_before_conditional: true,
                  unescape_strings: false,
                  jslint_happy: false,
                  end_with_newline: false,
                  wrap_line_length: '80',
                  indent_inner_html: true,
                  comma_first: false,
                  e4x: false,
                  wrap_attributes: 'preserve',
                })}
                id="text-cctri-summary-input"
                setValue={props.setSummaryValue}
              />
              <br />
              <br />
              <br />
              <br />
              <MultiLineTextField
                fullWidth
                multiline
                rows="50"
                label="Body"
                margin="normal"
                variant="filled"
                value={beautify.html(props.bodyValue, {
                  indent_size: '4',
                  indent_char: ' ',
                  max_preserve_newlines: '5',
                  preserve_newlines: true,
                  keep_array_indentation: false,
                  break_chained_methods: false,
                  indent_scripts: 'normal',
                  brace_style: 'expand',
                  space_before_conditional: true,
                  unescape_strings: false,
                  jslint_happy: false,
                  end_with_newline: false,
                  wrap_line_length: '80',
                  indent_inner_html: true,
                  comma_first: false,
                  e4x: false,
                  wrap_attributes: 'preserve',
                })}
                id="text-cctri-body-input"
                setValue={props.setBodyValue}
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
  );
};
