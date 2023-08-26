import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import './MyComponent.css';
import AuthTabs from './AuthTabs';
function App() {
  //const imageUrl = 'https://example.com/path/to/your/image.jpg';
  //const imageUrl = './images/self/logohead.png';
  
  return (
    
    <div className="page-container">
    
      <Container className="centered-container">
        <Row>
          <Col xs={6} md={4}>
           
          </Col>
          <Col xs={6} md={4}>
           
          </Col>
          <Col xs={6} md={4}>
          
          </Col>
        </Row>
        <Row className="content-row">
          <Col sm={6}>
          <AuthTabs />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
          
          </Col>
        </Row>
      
      </Container>
    </div>
  );
}

export default App;