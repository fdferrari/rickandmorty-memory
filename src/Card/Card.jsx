import React from "react";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classFlip: ["card-flip"] };
  }

  _clickCard = e => {
    const classFlip = [...this.state.classFlip];
    const idx = classFlip.findIndex(element => element === "is-flip");
    if (idx === -1) {
      classFlip.push("is-flip");
    } else {
      classFlip.splice(idx, 1);
    }
    this.setState({ classFlip: classFlip });
  };
  render() {
    return (
      <div className="col-md-3 card-container" onClick={this._clickCard}>
        <div className={this.state.classFlip.join(" ")}>
          <div className="card front"></div>
          <div className="card back">
            <img src={this.props.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
