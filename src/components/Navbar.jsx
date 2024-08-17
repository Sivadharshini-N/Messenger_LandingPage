import React from 'react';
import SpotknackLogo from "./../assets/images/SpotknackLogo.png";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand col-md-2" href="#">
                        <img width={"100%"} src={SpotknackLogo} alt="Spotknack Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bold" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">About Us</a>
                            </li>
                        </ul>
                       
                    </div>
                    <div>
                        <button className="btn">Login</button>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
