import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const contained = ({ theme }: { theme: Theme }) => css`
  box-shadow: none;
  color: white;
  :disabled {
    background: var(--colors-state-layers-on-surface-opacity-10, rgba(37, 44, 43, 0.1));
  }
  :hover {
    &.MuiButton-colorPrimary {
      background-color: ${theme.palette.primary.light};
    }
    &.MuiButton-colorError {
      background-color: ${theme.palette.error.main};
    }
    box-shadow: none;
  }
`;

const styledMuiButton = { contained };
export default styledMuiButton;
