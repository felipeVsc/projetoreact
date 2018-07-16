import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './App.css';

class Infos extends Component {
  render() {
    return (
      <div className="bordaFora">
        <div className="info">
        <Card>
        <CardBody>
          <CardTitle>Noticias</CardTitle>
          <CardSubtitle>OBMEP</CardSubtitle>
          <CardText>Prova ocorrerá no campus!</CardText>
          <Button>Saber mais</Button>
        </CardBody>
      </Card>
        
        </div>
        </div>
    );
  }
}

export default Infos;

