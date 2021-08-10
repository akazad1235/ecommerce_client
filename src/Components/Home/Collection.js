import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../../../src/fakeData/fakeData';
import ApiUrl from '../../api/AppURL';

const Collection = () => {

    const{id} = useParams();

    const[collectionProduct, setCollectionProduct] = useState([])
    useEffect(()=>{
        axios.get(`${ApiUrl.productType('collection')}`)
        .then((res)=>{
            setCollectionProduct(res.data.success)
        })
      },[0])
    

    return (
        <>

        <Container fluid={true}>
            <h4 className="text-center section-title">Collection Products</h4>
            <p className="text-center section-sub-title">Some Of Our Exlusive Collection, You May Like</p>
            <Row>
                {
                    collectionProduct.map(cProduct => {
                       return (
                            <Col className="p-0" xl={2} lg={2} md={2} sm={4} xs={6}>
                                 <Link to={`/details/${cProduct.slug}`} className="product-list">
                                <Card className="image-box card">
                                    <img src={`${ApiUrl.fileStore}assets/images/products/${cProduct.image}`} alt="image" />
                                
                                    <Card.Body>
                                        <h1 className="product-name-on-card text-center"  title={cProduct.title}>{cProduct.title.substring(0, 40)+((cProduct.title).length > 10 ? '...':'')}</h1>
                                        <p className="product-price-on-card text-center">Price:&#2547;{cProduct.price}</p>
                                    </Card.Body>
                                </Card>
                              </Link>
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