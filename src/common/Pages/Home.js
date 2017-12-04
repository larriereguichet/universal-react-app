import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withStyles } from 'material-ui/styles';
import { Helmet } from 'react-helmet';
import styles from '../styles';
import { getCounter } from '../reducers';
import { increment, decrement } from '../actions/counter';
import Layout from '../Components/Layout';
import Counter from '../Components/Counter';

class Home extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
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
        <Counter
          counter={this.props.counter}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
      </Layout>
    );
  }
}

export default compose(
  connect(state => ({ counter: getCounter(state) }), { push, increment, decrement }),
  withStyles(styles)
)(Home);
