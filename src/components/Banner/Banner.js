import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner1 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">COVID-19 Vaccine Sign-Up</h1>
                                    <h2 className="title-sm">Online appointments available at all Alabama locations and  <br />TrustCare Kids (MS) only.</h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner2 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">Walk-In Flu Shots</h1>
                                    <h2 className="title-sm">Get your flu shot today at any of our clinics! Multiple locations, <br /> convenient hours, seven days a week.</h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner3 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">	COVID-19 Testing Clinics</h1>
                                    <h2 className="title-sm">We are accepting appointments at our COVID-19 Testing Clinics; <br /> the clinics offer nasal swab and antibody <br /> blood tests via cash or credit only.</h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;