import { css } from '@emotion/css';
import { buttonClasses } from '@mui/material/Button';

import { colors } from '@/themes/animalMainTheme';

import { calloutEmphasized } from './mixins';

const cssVariables = Object.entries(colors).reduce(
  (acc, [key, value]: [string, string]) => {
    return `${acc}--${key}: ${value};`;
  },
  '',
);

export default css`
  a {
    color: var(--primary-green);
  }

  a:visited {
    color: var(--secondary-green);
  }

  a:hover {
    color: var(--green-60);
  }

  a:focus {
    color: var(--primary-green);
  }

  a:active {
    color: var(--primary-green);
  }

  input {
    background: transparent;
  }

  input:-webkit-autofill {
    -webkit-background-clip: text;
  }

  /* Chrome, Safari, Edge, Opera hide numeric input arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox hide numeric input arrows */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .${buttonClasses.root} {
    ${calloutEmphasized}
  }

  * {
    user-select: none;
  }

  ${cssVariables}
`;
