import React from 'react';
import logo from '../../images/kids/trust-care-kids-logo.png';

const TrustCareKids = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img className="w-75" src={logo} alt="" />
                </div>
                <div className="col-md-7 mt-5">
                    <p>TrustCare Kids, Located at 101 Lexington Dr., Suite A, in Madison, MS, is open Monday-Friday from 8am-8pm, Saturday from 9am-5pm, and Sunday from 1-7pm. // Phone: (601) 707-3771</p>
                </div>
            </div>

        </div>
    );
};

export default TrustCareKids;