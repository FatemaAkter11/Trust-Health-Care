import React from 'react';
import './Navbar.css';
import logo from "../../../images/logo.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-sm-12">
                        <div className="logo p-3">
                            <img className="w-100" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10 col-sm-12 mt-4">
                        <div className="menu-container me-5">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/blog" className="items">
                                    <li>Blog</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;