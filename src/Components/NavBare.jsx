import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const NavBare = () => {
  return (
    <div>
        
        <Navbar bg="dark" variant="dark">
            
        <Container>
        <Row>
        <Col xs={12} md={10}>
        <img src="/logo192.png" className='' alt ='myImage' width={50}/>
        <Navbar.Brand className='justify-content-start' href="#home">Navbar</Navbar.Brand>
        </Col>
        <Col xs={6} md={2}>
        <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Col>
      </Row>
        
 
         
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBare