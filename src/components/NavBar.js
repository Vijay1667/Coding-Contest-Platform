import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
export default function NavBar() {
    var [activate_home, setActivate_home] = useState(true);
    var [activate_prob, setActivate_prob] = useState(false);
    var [activate_potd, setActivate_potd] = useState(false);
    return (
        <nav className="navbar  sticky-top bg-dark navbar-dark navbar-expand-lg" style={{fontSize:"larger",zIndex:"0"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Code-V</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/problems">Problems </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/question/1">POTD</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <GoogleOAuthProvider clientId="984992029726-cqfpc3784j447b7ut4pagos47lhl44rq.apps.googleusercontent.com">
                                <GoogleLogin className="nav-link"
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }} 
                                    theme="outline"
                                    text="continue_with"
                                    shape="pill"
                                    size="large"
                                    />
                            </GoogleOAuthProvider>

                        </li>
                        {/* <li className="nav-item dropdown">

                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                <img src="https://img.icons8.com/fluency/30/null/user-male-circle.png" />

                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" >
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Sign Up</a></li>
                            </ul>

                        </li> */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}