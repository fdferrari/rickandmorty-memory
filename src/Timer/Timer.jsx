import React from 'react';
import './Timer.css';
import {Badge} from 'react-bootstrap';

const SECONDS_DEFAULT = 60;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: SECONDS_DEFAULT };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds === 0 ? SECONDS_DEFAULT : state.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Timer">
        <h1>
          <Badge variant="secondary">{this.state.seconds}</Badge>
        </h1>
      </div>
    );
  }
}

  export default Timer;