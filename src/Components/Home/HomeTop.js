import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BigSlider from './BigSlider';



const HomeTop = () => {
    return (
        <>

            <Container fluid={true} className="p-0 m-0 overflow-hidden home-top-desktop">
                <Row>
                    <Col log={2} md={2} sm={12} >

                    </Col>
                    <Col log={10} md={10} sm={12}>
                        <BigSlider/>
                    </Col>
                </Row>
            </Container>
        
        </>
    );
};

export default HomeTop;