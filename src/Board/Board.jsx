import React from "react";
import Card from "../Card/Card";
import "./Board.css";
var _ = require("lodash");

class Board extends React.Component {
  render() {
    return (
      <div className="container">
        <CardGroupLayout
          row={this.props.size}
          col={this.props.size}
          images={this.props.images}
        />
      </div>
    );
  }
}

const CardGroupLayout = props => {
  const cardsGroup = [];
  //shuffle images
  const rowMultCol = props.row * props.col;
  const end = rowMultCol / 2;
  const images = _.slice(_.shuffle(props.images), 0, end);
  const imagesCard = _.shuffle(_.concat(images, images));

  let acum = 0;

  for (let i = 0; i < props.row; i++) {
    const cards = [];
    const key = rowMultCol + "-" + i;
    for (let j = 0; j < props.col; j++) {
      const key = rowMultCol + "-" + (acum + 1);
      cards.push(<Card key={key} image={imagesCard[acum]} />);
      acum++;
    }
    cardsGroup.push(
      <div key={key} className="row">
        {cards}
      </div>
    );
  }
  return cardsGroup;
};

export default Board;
