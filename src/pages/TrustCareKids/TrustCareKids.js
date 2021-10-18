import React from 'react';
import logo from '../../images/kids/trust-care-kids-logo.png';
import primary from '../../images/kids/TrustCare-Kids-Primary-Care.jpg';
import urgent from '../../images/kids/TrustCare-Kids-Urgent-Care.jpg';
import expert from '../../images/kids/kid1.jpg';

const TrustCareKids = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img className="w-75" src={logo} alt="" />
                </div>
                <div className="col-md-7 mt-5">
                    <p>TrustCare Kids, Located at 150,Dhaka, Bangladesh is open Monday-Friday from 8am-8pm, Saturday from 9am-5pm, and Sunday from 1-7pm.(Phone: ++88 601-707-3771)</p>
                </div>
            </div>

            <div className="row">
                <div className="row mx-auto">
                    <div className="col-md-6">
                        <img className="w-100" src={primary} alt="" />
                        <div className="rounded mb-2" style={{ backgroundColor: 'aqua' }}>
                            <h2>Pediatric Primary Care</h2>
                            <p>We understand that pediatric care means more than treating a sick child—it means providing answers and guidance throughout your child’s growth. That’s why we strive to build lasting relationships with parents so they can raise safe, healthy kids. Our primary care pediatricians will take the time to provide you with the information you need to make treatment decisions and better understand your child’s medical condition. Comprehensive primary care is designed to keep your child healthy, now and in the future.</p>
                            <button className="btn btn-warning mb-4">Schedule on Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={urgent} alt="" />
                        <div className="rounded mb-2" style={{ backgroundColor: 'lightSalmon' }}>
                            <h2>Kids Urgent Care</h2>
                            <p>Our Kids Clinic treats acute and minor conditions in children by providing quick medical attention seven days a week for extended hours, when your regular doctor may not be available. We are designed to save you unnecessary (and unpleasant) trips to the emergency room, and ensure that your child will be seen by a pediatric specialist (which is often not the case when visiting the ER). For fevers to nasty weekend scrapes, avoid the emergency room and head to TrustCare Kids where we’ll see to it your child will feel better faster.</p>
                            <button className="btn btn-success mb-4">Get Directions</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto my-4">
                <div className="col-md-6">
                    <img className="w-100 rounded" src={expert} alt="" />
                </div>
                <div className="col-md-6" style={{ backgroundColor: 'tomato' }}>
                    <div className="mt-5">
                        <h2>What To Expect</h2>
                        <p className="fw-bold">Some children become nervous or anxious when it’s time to visit the doctor. To help them feel at ease, our clinic has a jungle theme with several rooms offering unique, animal exam room tables. All rooms have wall-mounted interactive tablet screens with puzzles and games for kids (and adults!). The waiting rooms also have interactive lighted wall panels and benches.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrustCareKids;