import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./ConfigGame.css";

class ConfigGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null, btnDisabled: true };
  }

  _disabledButton = (e, size) => {
    e.preventDefault();
    this.setState(state => ({
      btnDisabled: !state.btnDisabled
    }));
    this.props.changeSize(size);
  };
  render() {
    const options = ["Earth (C-137)", "Abadango", "Citadel of Ricks"];
    const size2 = 2;
    const size4 = 4;
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
          <ButtonSize
            disabled={this.state.btnDisabled}
            size={size2}
            action={this._disabledButton}
          />
          <ButtonSize
            disabled={!this.state.btnDisabled}
            size={size4}
            action={this._disabledButton}
          />
        </ButtonGroup>
      </div>
    );
  }
}

const ButtonSize = props => {
  return (
    <Button
      disabled={props.disabled}
      onClick={e => props.action(e, props.size)}
    >
      {props.size}x{props.size}
    </Button>
  );
};

export default ConfigGame;
