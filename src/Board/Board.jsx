import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "./Board.css";
import img200x150 from './200x150.svg';

class Board extends React.Component {


  render() {
    return (
      <div className="Board">
        <CardGroupLayout row={this.props.row} col={this.props.col} />
      </div>
    );
  }
}

const CardGroupLayout = props => {
  const cardsGroup = [];
  for (let i = 0; i < props.row; i++) {
    cardsGroup.push(
      <CardGroup key={i}>
        <CardLayout col={props.col} />
      </CardGroup>
    );
  }
  return cardsGroup;
};

const CardLayout = props => {
  const cards = [];  
  for (let i = 0; i < props.col; i++) {
    cards.push(
      <Card key={i} border="dark" className="p-2">
        <Card.Img variant="top" src={img200x150} alt="card"/>
      </Card>
    );
  }
  return cards;
};

export default Board;
