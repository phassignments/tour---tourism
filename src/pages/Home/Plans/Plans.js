import React from 'react';

import { Button, Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Plans = ({ plan }) => {
    const { spot, _id, img } = plan;

    return (
        <div>
            <Col>
                <Card className="cards m-3">
                    <Card.Img variant="top" height="350px" src={img} />
                    <Card.Body>
                        <Card.Title>
                            {spot}
                        </Card.Title>
                        <Card.Title>
                            <Button style={{ backgroundColor: '#879501' }} className=" border-0"> <Nav.Link className="text-light" as={Link} to={`/book/${_id}`} >
                                <i className="far fa-calendar-plus me-2"></i>
                                Book Tour</Nav.Link></Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Plans;