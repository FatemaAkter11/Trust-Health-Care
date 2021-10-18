import React from 'react';
import './Service.css';

const Service = (props) => {
    //distructuring
    const { title, img, description } = props.service || {};
    return (
        <div className="col-md-4 mb-4 ms-auto">
            <div className="card shadow-lg p-2 rounded  border border-primary" style={{ width: '22rem', height: 'h-100 d-inline-block' }}>
                <img src={img} className="w-75 service-img mx-auto" alt="..." />
                <div className="mt-3">
                    <h4 className="card-title"><span className="fw-bold text-center">Service:</span> {title}</h4>
                    <div className="text-center">
                        <h5><span className="fw-bold"></span>{description}</h5>
                    </div>
                    <div className="text-center">
                        <h5><span className="fw-bold"></span>{description.slice(0, 100)}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;