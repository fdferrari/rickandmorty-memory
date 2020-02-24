import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import './ActionGame.css';

class ActionGame extends React.Component {

    render() {
        return (
          <div className="ActionGame">
            <ButtonToolbar>
              <Button variant="success" className="Button">START</Button>
              <Button variant="danger" className="Button">STOP</Button>
              <Button variant="secondary" className="Button">CLEAN</Button>
            </ButtonToolbar>
          </div>
        );
      }
}

export default ActionGame;