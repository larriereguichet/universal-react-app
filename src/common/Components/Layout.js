import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

class Layout extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  get isMenuOpen() {
    return Boolean(this.state.anchorEl);
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  pushFromMenu = url => {
    this.props.push(url);
    this.handleRequestClose();
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="contrast"
              aria-label="Menu"
              aria-owns={this.isMenuOpen ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={this.isMenuOpen}
              onClose={this.handleRequestClose}
            >
              <MenuItem onClick={() => this.pushFromMenu('/')}>Home</MenuItem>
              <MenuItem onClick={() => this.pushFromMenu('/hello')}>Hello</MenuItem>
            </Menu>
            <Typography type="title" color="inherit" className={this.props.classes.flex}>
              Universal app HOT
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container className={this.props.classes.root} justify="center">
          <Grid item xs={8}>
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
