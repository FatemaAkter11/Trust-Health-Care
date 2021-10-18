import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices.js";
import Service from "../Service/Service.js";

const Services = () => {
    const { services } = useServices();
    return (
        <div>
            <Container className="py-5">
                <h2 className="text-center text-white mb-0">Our All Services</h2>
                <h1 className="my-4 mt-2 text-center text-muted fs-2">
                    Let Us Help You Feel Better Faster
                </h1>
                <Row>
                    {services?.map((service) => (
                        <Service
                            service={service}
                            key={service.id}>
                        </Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;