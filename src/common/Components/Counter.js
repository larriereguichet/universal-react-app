import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class Counter extends PureComponent {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementIfOdd = () => {
    if (this.props.counter % 2 !== 0) {
      this.props.increment();
    }
  };

  incrementAsync = (delay = 1000) => setTimeout(this.props.increment, delay);

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          Clicked: {this.props.counter} times
        </Grid>
        <Grid item xs={12}>
          <Button onClick={this.props.increment} variant="raised">
            +
          </Button>
          <Button onClick={this.props.decrement} variant="raised">
            -
          </Button>
          <Button onClick={this.incrementIfOdd}>Increment if odd</Button>{' '}
          <Button onClick={() => this.incrementAsync()}>Increment async</Button>
        </Grid>
      </Grid>
    );
  }
}

export default Counter;
