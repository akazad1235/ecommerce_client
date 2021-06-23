import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import NavMenuMoblie from '../Components/Common/NavMenuMoblie';

const UserOnboardPage = () => {
    return (
        <>
            <NavMenuDesktop/>
            <NavMenuMoblie/>
             <div className="onboard-container mt-5">
               <Container>
                   <Row className="justify-content-center align-self-center login-container">
                       <Col lg={6} md={6} sm={6} xm={4}>
                       <Card>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Text>
                                <label >Phone Number</label>
                                <input type="text" className="w-100" placeholder="Your Phone Number"/>
                            </Card.Text>
                            <Card.Link href="#" className="float-right">Next</Card.Link>
                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>
               </Container>
            </div>

        </>
    );
};

export default UserOnboardPage;