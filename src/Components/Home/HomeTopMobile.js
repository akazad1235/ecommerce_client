import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BigSlider from './BigSlider';
import MegaMenu from './MegaMenu';

const HomeTopMobile = () => {
    return (
        <>
        <Container fluid={true} className="p-0 m-0 overflow-hidden home-top-mobile">
                <Col log={9} md={9} sm={12}>
                    <BigSlider/>
                </Col>
        </Container>
    </>
    );
};

export default HomeTopMobile;