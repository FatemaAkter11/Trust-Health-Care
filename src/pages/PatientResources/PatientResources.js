import React from 'react';
import './PatientResources.css';
import img from "../../images/Patient-Resources.jpg";

const PatientResources = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <h1 className="title text-black">Patient Resources</h1>
                    <h2 className="text-black">TrustCare wants to make the entire patient experience as straightforward as possible. You may visit the patient portal to access COVID-19 testing results and stay connected to your health care. Additionally, you may pay online and access patient forms that may be completed in advance of arriving at a clinic.</h2>
                    <button className="btn btn-success fw-bold">Learn More</button>
                </div>
                <div className="col-md-5 mt-5">
                    <img className="w-100" src={img} alt="" />
                </div>
            </div>
            <div className="text-center">
                <h3>Additional Resources</h3> <hr />
                <div>
                    <h4>Insurance</h4>
                    <p>We accept most major insurance plans but please keep in mind that not all medical providers are in network with every insurance.
                    </p>
                    <button className="btn btn-success fw-bold">Learn What Insurance We Accept</button>
                </div>
                <div className="my-3">
                    <h4>Blog</h4>
                    <p>Keep up with medical updates on a variety of topics on our blog.
                    </p>
                    <button className="btn btn-success fw-bold">Visit Our Blog</button>
                </div>
                <div className="my-3">
                    <h4>Questions?</h4>
                    <p>Please let us know how we can help with any problems, questions, or comments you have.
                    </p>
                    <button className="btn btn-success fw-bold">Submit A Contact Form</button>
                </div>
            </div>
        </div>
    );
};

export default PatientResources;