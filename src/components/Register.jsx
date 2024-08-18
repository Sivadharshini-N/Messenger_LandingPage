import React from 'react';
import wpicon from "./../assets/images/wpicon.png";

const Register = () => {
    return (
        <div>
            <div className="container-fluid register-bg"  >
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <h1 className="mb-3">Let’s Connect <br />with Your Customers <br />in Real Time</h1>
                        <p className="mb-0">Create styleguides to organize components, colors, text styles, and spacing tokens.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={wpicon} width="100%" className='spinning-img' alt="WhatsApp Icon" />
                    </div>
                </div>
                <div className="container border bg-white shadow p-3 col-md-6 rounded">
                    <div className="row">
                        <div className="col-8">
                            <p>Register using your email address</p>
                            <h6>company@company.com</h6>

                        </div>
                        <div className="col-3 text-center d-flex justify-content-center align-items-center">
                            <button className='btn'>Register</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
