import React from 'react';
import { useParams } from 'react-router';
import detail from '../../images/detail.png';

const ServiceDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="row my-5">
                <div className="col-md-5">
                    <img src={detail} alt="" />
                </div>
                <div className="rounded col-md-7 my-5 mr-5" style={{ backgroundColor: "aquamarine" }}>
                    <h2>Welcome to Service Details Area</h2>
                    <h3>This is service area: {id}</h3>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;