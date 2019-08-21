import React from 'react';
import styled from 'styled-components';
import { OpenedItModel } from './model';

/* components */
import { SingleLineTextField } from 'app/components/inputs/textfields/SingleLineTextField';

const ItemBase = styled.div`
  padding: 0 72px 34px 72px;
`;

const StyledTextField = styled(SingleLineTextField)`
  margin-bottom: 27px;
`;

export const OpenedItem = (props: OpenedItModel) => {
  return (
    <ItemBase>
      <StyledTextField
        fullWidth
        label="Title"
        id="add-title"
        placeholder="Input text"
        defaultValue={props.title}
        setValue={value =>
          props.editItem({ index: props.index, title: value, expl: props.expl })
        }
      />
      <StyledTextField
        multiline
        fullWidth
        label="Explanation"
        id="add-explanation"
        placeholder="Input text"
        defaultValue={props.expl}
        setValue={value =>
          props.editItem({
            index: props.index,
            title: props.title,
            expl: value,
          })
        }
      />
    </ItemBase>
  );
};
