import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import useServices from "../../hooks/useServices.js";

const CourseDetails = () => {
    const { services } = useServices();
    const { addToCart } = useAuth();
    console.log(services);
    const { id } = useParams();
    const newSelected = services?.find((service) => service.id === Number(id));

    return (
        <div className="my-5">
            <Row>
                <Col>
                    <img width="100%" src={newSelected?.img} alt="" />
                </Col>
                <Col className="p-3">
                    <h1>{newSelected?.title}</h1>
                    <h4>{newSelected?.description}</h4>
                    <Col className="p-3">
                        <Row>
                            <Col>
                                <h1>Price: {newSelected?.price}$</h1>

                                <div>
                                    readonly
                                    style={{ color: "goldenrod" }}
                                    initialRating={newSelected?.rating}
                                    emptySymbol={<i className="far fa-star text-warning"></i>}
                                    fullSymbol={<i className="far fa-star text-warning"></i>}
                                    {" "}
                                    {newSelected?.rating}
                                    <div>Total Review: {newSelected?.ratingCount}</div>
                                </div>

                                <div className="d-flex">
                                    <button
                                        onClick={() => addToCart(newSelected?.key)}
                                        className="w-50 ms-1 mt-3 btn btn-primary"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <img
                                        width="120px"
                                        className="rounded-circle"
                                        src={newSelected?.sellerThumb}
                                        alt=""
                                    />
                                    <h4>Seller: {newSelected?.provider}</h4>
                                    <p className="m-0">Web Apps Developer</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};
export default CourseDetails;