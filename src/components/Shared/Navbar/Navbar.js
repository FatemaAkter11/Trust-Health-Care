import React from 'react';
import './Navbar.css';
import logo from "../../../images/logo.svg"
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand nav-img">
                        <img className="w-50" src={logo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav items ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/patient">Patient-Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/kids">TrustCare-Kids</Link>
                            </li>
                            <li className="nav-item ps-2">
                                <Link className="nav-link btn btn-primary px-4 fw-bold text-white" to="/login">Login</Link>
                            </li>

                            {user?.email && <button className="btn btn-warning mx-1" onClick={logout}>log out</button>}
                            <span className="px-2">{user.displayName} </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;