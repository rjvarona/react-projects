import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



class CardView extends Component {
    constructor(props){
        super(props);
    }
    render(){
  return (
    <div> 
      <Card>
        <CardImg top width="100%" src={this.props.person.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.person.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{this.props.person.description}</CardText>
          <Button>View Product</Button>
        </CardBody>
      </Card>
    </div>
      )
  }
};




export default CardView;