import { createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: { light: green[300], main: green[500], dark: green[700] },
    accent: { light: red[300], main: red[500], dark: red[700] },
    type: 'light',
  },
});

export default theme;
