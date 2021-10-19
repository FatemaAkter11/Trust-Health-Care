import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>This is service area: {id}</h3>
        </div>
    );
};

export default ServiceDetails;