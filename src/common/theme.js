import { createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

export default theme;
