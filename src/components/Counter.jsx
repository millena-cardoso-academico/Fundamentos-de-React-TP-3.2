import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number,
};

Counter.defaultProps = {
  initialCount: 0,
};

export default Counter;