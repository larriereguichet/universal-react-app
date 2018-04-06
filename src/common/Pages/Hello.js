import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Helmet } from 'react-helmet';
import styles from '../styles';
import { getCounter } from '../reducers';
import Layout from '../Components/Layout';

class Hello extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    push: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Layout classes={this.props.classes} push={this.props.push}>
        <Helmet>
          <title>Page Title less than 55 characters</title>
          <meta name="description" content="Description of the page less than 150 characters" />
          <link rel="canonical" href="/" />
        </Helmet>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            The counter state is currently caca {this.props.counter}
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default compose(
  connect(state => ({ counter: getCounter(state) }), { push }),
  withStyles(styles)
)(Hello);
