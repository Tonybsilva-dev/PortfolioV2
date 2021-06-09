import React from 'react';
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';

// import { Container } from './styles';

function CarouselContent() {
  return (
    <div className="background">
      <div className="texture">
        <Container fluid className="container-top" >
          <Row xs={1} md={2} >
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CarouselContent;