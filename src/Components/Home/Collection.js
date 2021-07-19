import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../../../src/fakeData/fakeData';
import ApiUrl from '../../api/AppURL';

const Collection = () => {

    const{id} = useParams();

    const [collection, setCollection] =useState([])

    let newCollection = 'new';
    axios.get(`${ApiUrl.baseURL}home/${newCollection}`)
    .then(res => {
            setCollection(res.data.success);
    })

    

    return (
        <>

        <Container fluid={true}>
            <h4 className="text-center section-title">Collection Products</h4>
            <p className="text-center section-sub-title">Some Of Our Exlusive Collection, You May Like</p>
            <Row>
                {
                    collection.map(fProducts => {
                       return (
                            <Col className="p-0" xl={2} lg={2} md={2} sm={4} xs={6}>
                               
                                <Card className="image-box card">
                                    <img src={fProducts.image} alt="image" />
                                
                                    <Card.Body>
                                        <h1 className="product-name-on-card text-center">{fProducts.title}</h1>
                                        <p className="product-price-on-card text-center">Price: {fProducts.price}</p>
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

export default Collection;