import React from 'react';

import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import ActionGame from './ActionGame/ActionGame';
import Board from './Board/Board';
import ConfigGame from './ConfigGame/ConfigGame';
import Timer from './Timer/Timer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { row: 3, col:3 };
  }

  _3To3 = () => this.setState({row: 3, col: 3});

  _4To4 = () => this.setState({row: 4, col: 4});

  render() {
    return (
    <Container className="App">
      <Row>
        <ConfigGame btn3To3 = {this._3To3} btn4To4 = {this._4To4}/>
      </Row>
      <Row>
        <Col xs={8}>
          <Row>
            <Board row={this.state.row} col={this.state.col}/>
          </Row>
          <Row>
            <ActionGame />
          </Row>
        </Col>
        <Col>
          <Timer />
        </Col>
      </Row>
    </Container>
  );
}
}

export default App;
