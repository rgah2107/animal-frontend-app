import { css } from '@emotion/react';

export const root = css`
  border-radius: 10px;
  height: 30px;
  outline: none;
  border: 1px solid var(--color-neutrals-300, #c4c4c4);
  & fieldset {
    border: none;
    padding: none;
  }
  & div.MuiSelect-select {
    padding-left: 4px;
  }
  padding: 4px;

  &:not(.Mui-disabled) {
    color: var(--Neutral-100, var(--text-text-primary, #161616));

    &:hover {
      border: 1px solid var(--colors-border-border, #6f6f6f);
      background: linear-gradient(
          0deg,
          var(--colors-state-layers-on-surface-opacity-10, rgba(37, 44, 43, 0.1)) 0%,
          var(--colors-state-layers-on-surface-opacity-10, rgba(37, 44, 43, 0.1)) 100%
        ),
        var(--colors-surfaces-surface, #fff);
    }

    &:active {
      border: 1px solid var(--colors-border-border, #6f6f6f);
      background: linear-gradient(
          0deg,
          var(--colors-state-layers-on-surface-opacity-14, rgba(37, 44, 43, 0.14)) 0%,
          var(--colors-state-layers-on-surface-opacity-14, rgba(37, 44, 43, 0.14)) 100%
        ),
        var(--colors-surfaces-surface, #fff);
    }
  }
`;

const styledMuiSelect = { root };
export default styledMuiSelect;
