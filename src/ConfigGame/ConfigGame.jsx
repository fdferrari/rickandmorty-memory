import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./ConfigGame.css";

class ConfigGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null, btnDisabled: true };
  }

  _disabledButton = (e, changeLayout) => {
    e.preventDefault();
    this.setState(state => ({
      btnDisabled: !state.btnDisabled
    }));
    changeLayout();
  };
  render() {
    const options = ["Earth (C-137)", "Abadango", "Citadel of Ricks"];
    return (
      <div className="ConfigGame">
        <Typeahead
          id="my-typeahead-id"
          className="SelectLocation"
          onChange={selected => {
            this.setState({ selected });
          }}
          options={options}
          selected={this.state.selected}
          placeholder="Pick a location..."
        />
        <ButtonGroup className="ButtonGroup">
          <Button
            disabled={this.state.btnDisabled}
            onClick={(e) => this._disabledButton(e, this.props.btn3To3)}
          >
            3x3
          </Button>
          <Button
            disabled={!this.state.btnDisabled}
            onClick={(e) => this._disabledButton(e, this.props.btn4To4)}
          >
            4x4
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ConfigGame;
