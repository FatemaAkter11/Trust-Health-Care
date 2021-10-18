import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
    const { id, img, title, description, rating, ratingCount } = service;

    return (
        <Col sm={12} md={6} lg={4}>
            <div className="m-2">
                <Card className="mx-auto" style={{ width: "21rem" }}>
                    <Card.Img variant="top" className="img-fluid" src={img} />
                    <Card.Body className="my-1 py-1">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Body className="my-1 py-1">
                        <Row>
                            <Col>

                                {
                                    <i className="far fa-star text-warning"></i>
                                }
                                {
                                    <i className="fas fa-star text-warning"></i>
                                }
                                <span>{rating}</span>
                            </Col>
                            <Col>Total Review: {ratingCount}</Col>
                        </Row>
                    </Card.Body>
                    <Card.Body className="d-flex">
                        <NavLink
                            to={`/services/${id}`}
                            className="btn btn-primary w-100 me-1"
                        >
                            View Details
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Service;