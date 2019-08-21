import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

/* styles */
import color from 'app/theme/color';
import { boxShadow } from 'app/theme';

export const StyledBox = styled(Box)`
  && {
    height: calc(100% - 40px);
    padding-left: 40px;
    padding-top: 40px;
  }
`;

export const SectionItem = styled.div`
  padding: 16px 0;
`;

export const StyledGrid = styled(Grid)`
  && {
    height: calc(100% - 110px);
    overflow-y: auto;
  }
`;

export const StyledGridItem = styled(Grid)`
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
