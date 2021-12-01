import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = (props) => {
   const { id } = useParams();
   const product = products.find((p) => p._id === id);
   return (
      <>
         {' '}
         <Link className="btn btn-light my-3" to="/">
            Go Back
         </Link>
         <Row>
            <Col md={6}>
               <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h2>{product.name}</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                     />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>
                     Description: {product.description}
                  </ListGroup.Item>
               </ListGroup>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        <Row>
                           <Col>Price:</Col>
                           <Col>
                              <strong>${product.price}</strong>
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Row>
                           <Col>Status:</Col>
                           <Col>
                              {product.countInStock > 0
                                 ? 'In Stock'
                                 : 'Out of Stock'}
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           style={{ width: '100%' }}
                           className="btn btn-block"
                           type="button"
                           disabled={product.countInStock === 0}
                        >
                           Add To Cart
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
               </Card>
            </Col>
         </Row>
      </>
   );
};

export default ProductScreen;
