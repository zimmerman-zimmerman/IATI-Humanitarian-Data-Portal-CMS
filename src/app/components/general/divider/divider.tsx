import React from 'react';
import styled from 'styled-components';
import color from 'app/theme/color';

const StyledDivider = styled.div`
  height: 1px;
  background-color: ${color.greylight30OrFontdisablet};
`;

interface DividerModel {
  width?: string;
}

export const Divider = (props: DividerModel) => {
  const width = props.width || '100%';

  return <StyledDivider style={{ width }} />;
};
