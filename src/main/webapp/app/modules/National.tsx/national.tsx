import React from 'react';
import './national.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, CardImg, CardBody, Card, CardText, CardHeader } from 'reactstrap';
import StandardArticleBox from '../articlecomponents/standardarticlebox';
export const National = () => {
  return (
    //Container encapsulating the WHOLE THING
    //Card is a formatt(Structure)
    //Row,Col used for layout
    <Container>
      <Card>
        <CardHeader>
          <h2>NATIONAL</h2>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" md="6">
              <CardImg
                top
                width="100%"
                src="https://cdn.pixabay.com/photo/2017/05/19/22/36/statue-of-liberty-2327760_1280.jpg"
                className="national-headline"
              />
            </Col>
            <Col xs="12" md="6"></Col>
          </Row>
          <CardText className="nationa-body">
            National news covers significant events, developments, and issues within a particular country. It encompasses a wide range of
            topics including politics, economy, society, culture, and more. National news provides citizens with important information about
            their country, helping them stay informed about current affairs, government policies, social trends, and events that impact
            their lives directly or indirectly. This type of news reporting plays a crucial role in shaping public opinion, promoting
            transparency, and fostering civic engagement within a nation.
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default National;
