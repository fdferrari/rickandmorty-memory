import React from 'react';

import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import ActionGame from './ActionGame/ActionGame';
import Board from './Board/Board';
import ConfigGame from './ConfigGame/ConfigGame';
import Timer from './Timer/Timer';
import {img1, img2, img3, img4, img5, img7, img10, img11} from './assets/index';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { size : 2 };
  }

  _changeSize = (size) => this.setState({size:size});

  render() {
    return (
    <Container className="App">
      <Row>
        <ConfigGame changeSize = {this._changeSize}/>
      </Row>
      <Row>
        <Col xs={8}>
          <Row>
            <Board size={this.state.size} images={[img1, img2, img3, img4, img5, img7, img10, img11]}/>
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
