import React, { Component } from 'react';

import { Container,Row, Col } from 'react-bootstrap';


import ReactDOM from 'react-dom';
import './index.css';
import CardView from './Main'
import example from './Main';


    
class Main extends Component{
    constructor(){
        super();
        this.state ={
            people: 
            [
                {
                    name: "Jacob White",
                    description: "The best weeb in the planet",
                    img: "jbWhite.jpg"
                },
                {   
                    name: "Ricardo Milos",
                    description: "This man is amazing ~ kanye west",
                    img: "ricardo.jpg"
                },
                {
                    name: "JonTron",
                    description: "skrrrrrrrrrrrrrrrrrr",
                    img: "dota.jpg"
                }

            ]
        }

    }
    render(){
        let CardViews  = this.state.people.map( person => {
            return (
<                   Col sm="4">
                    <CardView  person ={person}  />
                </Col>

            )
        })


        return(
            <Container fluid>
                <Row>
                    {CardViews}
                </Row>
            </Container>
        )
    }
}


  
  ReactDOM.render(  
    <Main />,
    document.getElementById('app')
  );


  export default example;