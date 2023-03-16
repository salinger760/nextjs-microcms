import { createTheme } from '@mui/material/styles'
import variables from '@/styles/variables'

export const muiTheme = createTheme({
  typography: {
    fontSize: 24,
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: variables.WHITE,
            '.MuiInputBase-input': {
              paddingTop: '6px',
              paddingBottom: '6px',
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: variables.WHITE,
            '&:hover': {
              backgroundColor: variables.ALICE_BLUE,
            },
          },
        },
      ],
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: variables.WHITE,
            '.MuiSelect-select': {
              paddingTop: '6px',
              paddingBottom: '6px',
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: variables.THEME_C,
            border: `1px solid ${variables.THEME_C}`,
            padding: '0 10px',
            '&.Mui-selected': {
              backgroundColor: variables.THEME_C,
              color: variables.WHITE,
              '&:hover': {
                backgroundColor: variables.THEME_C,
                opacity: 0.75,
              },
            },
          },
        },
      ],
    },
  },
})
