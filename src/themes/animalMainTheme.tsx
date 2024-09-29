import { css } from '@emotion/react';
import { type Theme, createTheme } from '@mui/material';
import Fade from '@mui/material/Fade';

import { calloutEmphasized } from '../styles/mixins';
import styledMuiButton from './styledMuiButton';
import styledMuiSelect from './styledMuiSelect';

export const colors = {
  'primary-green': '#26ad9a',
  'secondary-green': '#96c73c',
  help: '#802ef2',
  'help-website': '#a284f8',
  'help-details': '#ea84f8',
  'neutral-white': '#fff',
  'gray-10': '#f4f4f4',
  'neutral-100': '#161616',
  'neutral-200': '#e2e2e2',
  'neutral-220': '#E0E0E0',
  'neutral-250': '#d9d9d9',
  'neutral-300': '#c4c4c4',
  'neutral-400': '#a8a8a8',
  'neutral-500': '#8f8f8f',
  'neutral-600': '#6f6f6f',
  'gray-30': '#c4c4c4',
  'gray-40': '#a8a8a8',
  'gray-50': '#8d8d8d',
  'gray-60': '#6f6f6f',
  white: '#fff',
  black: '#000',
  'green-10': '#f4fbfa',
  'green-20': '#d3eeea',
  'green-60': '#5bc1b3',
  'green-100': '#188273',
  'green-110': '#24ad9a',
  'dark-green': '#0a3d36',
  'red-25': '#f5d5d0',
  'red-60': '#ed7362',
  'red-100': '#d95644',
  'coral-burst-200': '#f7ddda',
  'soft-yellow': '#f5ebc9',
  yellow: '#f4c620',
  'moon-yellow-200': '#fdf4d2',
  'moon-yellow-700': '#cba10b',
  'yellow-100': '#eab90b',
  'teal-100': '#f5faf9',
  'teal-200': '#d3eeea',
  'teal-150': '#e9f7f5',
  'teal-300': '#a8ded7',
  'teal-450': '#5BC1B3',
  'teal-600-primary': '#26ad9a',
  'color-teal-450': '#5BC1B3',
  'coral-burst-300': '#f0bbb4',
  'coral-burst-100': '#fbeeec',
  'coral-burst-800': '#823429',
  'soft-green-gradient': 'linear-gradient(360deg, #d3eeea 0%, #f5faf9 100%)',
  'soft-yellow-gradient': 'linear-gradient(0deg, #f5ebc9 0%, #faf9f5 100%)',
  'soft-red-gradient': 'linear-gradient(0deg, #f5d5d0 0%, #faf6f5 100%)',
  'green-gradient': 'linear-gradient(180deg, #5bc1b3 0%, #d3eeea 100%)',
  'disabled-transparent': 'rgba(0, 0, 0, 0.15)',
  'colors-border-primary-opacity-80': 'rgba(38, 173, 154, 0.8)',
  'colors-surfaces-surface-variant': '#E2E4E4',
  'colors-surfaces-surface-container-low': '#f2f3f3',
  'colors-state-layers-on-surface-opacity-6': 'rgba(37, 44, 43, 0.06)',
  'colors-state-layers-on-surface-opacity-10': 'rgba(37, 44, 43, 0.10)',
  'colors-state-layers-on-surface-opacity-14': 'rgba(37, 44, 43, 0.14)',
  'colors-containers-secondary-container': '#D5F6F1',
  'colors-border-border': '#6F6F6F',
  'colors-surfaces-inverse-surface-container': '#2C2C2C',
  'colors-on-surface-on-surface-inverse': '#EEF6F6',
  'colors-on-surface-on-secondary-color': '#219786',
  'colors-surfaces-surface-container-high': '#E8EDEC',
  'colors-on-surface-on-primary-fixed': '#078875',
  'colors-on-surface-on-surface-on-surface-2': '#121716',
};

const animalMainTheme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  palette: {
    primary: {
      main: colors['teal-600-primary'],
      light: colors['teal-450'],
    },
    secondary: {
      main: colors['secondary-green'],
    },
    info: {
      main: '#98ADAA',
    },
    error: {
      main: colors['red-100'],
    },
    warning: {
      main: '#F9EBBA',
    },
  },
  // button contained variant text color=white and not all uppercase
  components: {
    MuiButton: {
      defaultProps: {
        classes: calloutEmphasized,
        disableRipple: true,
      },
      variants: [
        {
          props: {
            size: 'large',
          },
          style: {
            padding: '16px 20px',
            height: 50,
            gap: 10,
          },
        },
        {
          props: {
            size: 'medium',
          },
          style: {
            padding: '8px 16px',
            height: 34,
            gap: 4,
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
        },
        contained: styledMuiButton.contained,
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
        disableRipple: true,
      },
      variants: [
        {
          props: {
            size: 'large',
          },
          style: {
            padding: 12,
          },
        },
        {
          props: {
            size: 'small',
          },
          style: {
            padding: 4,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: 'none',
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        size: 'small',
      },
      variants: [
        {
          props: {
            size: 'large',
          },
          style: {
            padding: 12,
          },
        },
        {
          props: {
            size: 'small',
          },
          style: {
            padding: 4,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 10,
          background: colors['colors-surfaces-surface-container-high'],
          border: 'none',
          '&.Mui-selected': {
            backgroundColor: colors['colors-containers-secondary-container'],
            color: colors['colors-on-surface-on-secondary-color'],
            '&:hover': {
              background:
                'linear-gradient(0deg, var(--colors-state-layers-on-surface-opacity-6, rgba(37, 44, 43, 0.06)) 0%, var(--colors-state-layers-on-surface-opacity-6, rgba(37, 44, 43, 0.06)) 100%), var(--colors-containers-secondary-container, #D5F6F1);',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        // TODO: migrate rest to styled approach
        root: styledMuiSelect.root,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        sizeSmall: css`
          height: 20px;
          width: 20px;
          padding: 3px;
        `,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        TransitionComponent: Fade,
        enterDelay: 400,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: colors['colors-surfaces-inverse-surface-container'],
          borderRadius: 10,
          padding: '8px 16px',
          color: colors['colors-on-surface-on-surface-inverse'],
          textOverflow: 'ellipsis',
          fontSize: 12,
          boxShadow:
            '0px 0px 0px 1.5px rgba(0, 0, 0, 0.04), 0px 1px 2px -0.5px rgba(0, 0, 0, 0.06), 0px 1px 3px -1.5px rgba(0, 0, 0, 0.06), 0px 0px 6px -3px rgba(0, 0, 0, 0.06), 0px 6px 12px -6px rgba(0, 0, 0, 0.06), 0px 16px 32px -12px rgba(0, 0, 0, 0.16);',
        },
        arrow: {
          color: colors['colors-surfaces-inverse-surface-container'],
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: 0,
          borderRadius: 12,
          width: 498,
        },
        container: {
          background: 'rgba(22, 22, 22, 0.50)',
          backdropFilter: 'blur(1.5px)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: colors['neutral-100'],
          padding: 20,
          paddingBottom: 24,
          textAlign: 'start',
          height: 32,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '20px',
          textAlign: 'start',
          color: colors['neutral-600'],
          fontSize: 14,
          lineHeight: 22 /* 157.143% */,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '20px',
          gap: 20,
          borderTop: '1px solid var(--Neutral-250, #D9D9D9)',
          '&>:not(style)~:not(style)': {
            margin: 0,
          },
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'stretch',
          padding: 14,
          fontSize: 14,
          lineHeight: '22px',
          gap: 2,
          '& .MuiAlert-icon': {
            marginRight: 8,
            width: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .MuiAlert-action': {
            padding: 0,
          },
        },
        outlined: {
          border: `1px solid ${colors['teal-200']}`,
          background: colors['teal-100'],
          '& .MuiAlert-message': {
            color: colors['colors-on-surface-on-primary-fixed'],
          },
        },
        message: {
          padding: 0,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
          marginTop: 4,
          boxShadow: `0px 20px 60px 0px rgba(22, 22, 22, 0.20)`,
        },
        list: {
          padding: 0,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: false,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          textAlign: 'start',
          color: colors['colors-on-surface-on-surface-on-surface-2'],
          opacity: 0.5,
          '&.Mui-focused': {
            color: colors['colors-on-surface-on-surface-on-surface-2'],
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default animalMainTheme;
export type AptimyzMainThemeType = Theme;
