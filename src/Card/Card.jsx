import React from "react";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlip: false };
  }
  render() {
    const classFlip = ["card-flip"];
    if (this.state.isFlip) {
      classFlip.push("is-flip");
    }
    return (
      <div
        className="col-md-3 card-container"
        onClick={e =>
          this.setState(state => ({
            isFlip: !state.isFlip
          }))
        }
      >
        <div className={classFlip.join(" ")}>
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
