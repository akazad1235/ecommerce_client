import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ApiUrl from '../../api/AppURL';



const FeaturedProducts = () => {
    const[featuredProduct, setFeaturedProduct] = useState([])
    useEffect(()=>{
        axios.get(`${ApiUrl.productType('featured')}`)
        .then((res)=>{
            setFeaturedProduct(res.data.success)
        })
      },[0])
    return (
       <>

        <Container fluid={true}>
            <h4 className="text-center section-title">Featured Products</h4>
            <p className="text-center section-sub-title">Some Of Our Exlusive Collection, You May Like</p>
            <Row>
                {
                    featuredProduct.map(fProducts => {
                       return < >
                            <Col className="p-2" xl={2} lg={2} md={2} sm={4} xs={6} >
                                <Link to={`/details/${fProducts.slug}`} className="product-list">
                                    <Card className="image-box card">
                                        <img src={`${ApiUrl.fileStore}assets/images/products/${fProducts.image}`} alt="" />
                                        <Card.Body>
                                            <h1 className="product-name-on-card text-center" title={fProducts.title}>{fProducts.title.substring(0, 40)+((fProducts.title).length > 10 ? '...':'')}</h1>
                                            <p className="product-price-on-card text-center">&#2547;{fProducts.price}</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </>

                    })
                }
                
            </Row>
        </Container>
     
       </>
    );
};

export default FeaturedProducts;