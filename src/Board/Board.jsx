import React from "react";
import Card from '../Card/Card'
import "./Board.css";

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
  for (let i = 0; i < props.row; i++) {
      const cards = [];
      for(let j = 0; j < props.col; j++){
        cards.push(
          <Card key={i} image={props.images[i]}/>
        );
      }
    cardsGroup.push(
      <div key={i} className="row">
        {cards}
      </div>
    );
  }
  return cardsGroup;
};

export default Board;
