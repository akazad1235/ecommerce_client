import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FakeData from '../../../src/fakeData/fakeData';

const FeaturedProducts = () => {
    
    return (
       <>
        <Container fluid={true}>
            <h4 className="text-center section-title">Featured Products</h4>
            <p className="text-center section-sub-title">Some Of Our Exlusive Collection, You May Like</p>
            <Row>
                {
                    FakeData.map(fProducts => {
                       return (
                            <Col className="p-2" xl={2} lg={2} md={2} sm={4} xs={6}>
                               
                                <Card className="image-box card">
                                    <Link to="/details"><img src={fProducts.img} alt="" /></Link>
                                
                                    <Card.Body>
                                        <h1 className="product-name-on-card text-center">Product Title</h1>
                                        <p className="product-price-on-card text-center">Price: 500tk</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })
                }
                
            </Row>
        </Container>
       </>
    );
};

export default FeaturedProducts;