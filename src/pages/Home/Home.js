import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="home-container">
            {/*banner part */}
            <Banner></Banner>
            {/* services area*/}
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5">Our Services</h1>
                <div className="col-md-12">
                    {/* service data load */}
                    <div className="row ms-4">
                        {
                            services.slice(0, 6)?.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;